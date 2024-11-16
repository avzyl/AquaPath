// const ctx = document.getElementById('waterLevelChart').getContext('2d');
// const waterLevelChart = new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: [],
//         datasets: [{
//             label: 'Water Level',
//             data: [],
//             borderWidth: 2,
//             fill: false
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });

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
                const tableBody = document.getElementById('dataTable');
                tableBody.innerHTML = '';

                waterLevelChart.data.labels = [];
                waterLevelChart.data.datasets[0].data = [];
                waterLevelChart.data.datasets[0].borderColor = [];

                data.forEach(entry => {
                    let lineColor;
                    if (entry.level < 10) {
                        lineColor = 'rgba(76, 175, 80, 1)'; // Green
                    } else if (entry.level >= 10 && entry.level < 20) {
                        lineColor = 'rgba(255, 193, 7, 1)'; // Yellow
                    } else {
                        lineColor = 'rgba(255, 0, 0, 1)'; // Red
                    }

                    waterLevelChart.data.labels.unshift(entry.time);
                    waterLevelChart.data.datasets[0].data.unshift(entry.level);
                    waterLevelChart.data.datasets[0].borderColor.push(lineColor);

                    tableBody.innerHTML += `
                            <tr>
                                <td>${entry.time}</td>
                                <td>${entry.location}</td>
                                <td>${entry.level}</td>
                                <td>${entry.status}</td>
                            </tr>
                        `;
                });

                waterLevelChart.update();
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}


setInterval(fetchWaterLevelData, 5000);
fetchWaterLevelData();
setInterval(updateClock, 1000);
updateClock();