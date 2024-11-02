const ctx = document.getElementById('waterLevelChart').getContext('2d');
const waterLevelChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Water Level',
            data: [],
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

function updateClock() {
    const now = new Date();
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    document.getElementById('clock').textContent = now.toLocaleString('en-US', options);
}

function fetchWaterLevelData() {
    fetch('assets/php/functions/fetch_water_lvls.php')
        .then(response => response.json())
        .then(data => {
            if (data) {
                // Clear previous data
                const tableBody = document.getElementById('dataTable');
                tableBody.innerHTML = '';

                // Update chart data
                waterLevelChart.data.labels = [];
                waterLevelChart.data.datasets[0].data = [];
                waterLevelChart.data.datasets[0].borderColor = []; // Reset colors

                data.forEach(entry => {
                    // Determine line color based on level
                    let lineColor;
                    if (entry.level < 10) {
                        lineColor = 'rgba(76, 175, 80, 1)'; // Green
                    } else if (entry.level >= 10 && entry.level < 20) {
                        lineColor = 'rgba(255, 193, 7, 1)'; // Yellow
                    } else {
                        lineColor = 'rgba(255, 0, 0, 1)'; // Red
                    }

                    // Push to chart data
                    waterLevelChart.data.labels.unshift(entry.time);
                    waterLevelChart.data.datasets[0].data.unshift(entry.level);
                    waterLevelChart.data.datasets[0].borderColor.push(lineColor); // Add color for each point

                    // Update table
                    tableBody.innerHTML += `
                            <tr>
                                <td>${entry.time}</td>
                                <td>${entry.location}</td>
                                <td>${entry.level}</td>
                                <td>${entry.status}</td>
                            </tr>
                        `;
                });

                // Update the chart
                waterLevelChart.update();
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}


// Fetch data every 30 seconds (30000 milliseconds)
setInterval(fetchWaterLevelData, 5000);
// Initial fetch
fetchWaterLevelData();
// Update clock every second
setInterval(updateClock, 1000);
// Initial clock display
updateClock();