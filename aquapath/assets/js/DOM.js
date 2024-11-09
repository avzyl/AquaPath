// DOM Elements
// --------------------- SEARCH and SUGGESTIONS --------------------- //
document.getElementById('searchLocation').addEventListener('input', function () {
    const query = this.value;

    if (query.length > 2) {
        fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=5&q=${query}, Philippines`)
            .then(response => response.json())
            .then(data => {
                const suggestionsDiv = document.getElementById('suggestions');
                suggestionsDiv.innerHTML = ''; // Clear previous suggestions

                if (data.length > 0) {
                    data.forEach(item => {
                        const suggestionItem = document.createElement('div');
                        suggestionItem.textContent = item.display_name;
                        suggestionItem.style.cursor = 'pointer';
                        suggestionItem.onclick = () => {
                            setLocation(item);
                            suggestionsDiv.innerHTML = ''; // Clear suggestions after selection
                            suggestionsDiv.style.display = 'none'; // Hide suggestions
                        };
                        suggestionsDiv.appendChild(suggestionItem);
                    });
                    suggestionsDiv.style.display = 'block'; // Show suggestions
                } else {
                    suggestionsDiv.style.display = 'none'; // Hide if no suggestions
                }
            });
    } else {
        document.getElementById('suggestions').style.display = 'none'; // Hide suggestions if query is too short
    }
});

document.getElementById('searchBtn').addEventListener('click', function () {
    const locationQuery = document.getElementById('searchLocation').value;

    if (locationQuery) {
        document.getElementById('loadingMessage').style.display = 'block'; // Show loading message

        fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${locationQuery}`)
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    const coords = [data[0].lat, data[0].lon];
                    map.setView(coords, 15);
                    L.marker(coords).addTo(map).bindPopup(locationQuery).openPopup();
                } else {
                    alert('Location not found.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            })
            .finally(() => {
                document.getElementById('loadingMessage').style.display = 'none'; // Hide loading message
            });
    } else {
        alert('Please enter a location to search.');
    }
});

// geocode
function geocodeLocation(query, callback) {
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}, Philippines`)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                const { lat, lon } = data[0];
                callback([parseFloat(lat), parseFloat(lon)]);
            } else {
                alert('Location not found');
            }
        });
}


// clear search function
function clearSearch() {
    document.getElementById('searchLocation').value = ''; // Clear the search bar

    document.getElementById('suggestions').innerHTML = '';
    document.getElementById('suggestions').style.display = 'none';
}

document.getElementById('clear-btn').addEventListener('click', clearSearch);

// --------------------- ROUTE BTNs --------------------- //
// roggle route
document.getElementById('toggleRouteSearch').addEventListener('click', function () {
    document.getElementById('searchContainer').style.display = 'none'; // Hide location search
    document.getElementById('routeSearchContainer').style.display = 'grid'; // Show route search
});

// close route
document.getElementById('closeRouteSearch').addEventListener('click', function () {
    document.getElementById('routeSearchContainer').style.display = 'none'; // Hide route search
    document.getElementById('searchContainer').style.display = 'flex'; // Show location search
});


//--------------------- DIRECTION BTNs --------------------- //
// toggle direction
document.getElementById('toggle-directions').addEventListener('click', function () {
    const directions = document.getElementById('directions');
    directions.style.display = directions.style.display === 'none' || directions.style.display === '' ? 'block' : 'none';
});

// close direction
document.getElementById('close-directions').addEventListener('click', function () {
    document.getElementById('directions').style.display = 'none';
});