// Initialize the map centered on Malolos, Bulacan
const map = L.map('map').setView([14.8418, 120.9401], 14); // Coordinates for Malolos, Bulacan

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Define coordinates for the McArthur Highway polyline in Malolos (example coordinates)
const highwayCoordinates = [
    [14.876023, 120.795324], // Point A
    [14.871466, 120.799345]  // Point B (extend as needed)
];

// Initialize the polyline with default color green
let highwayLine = L.polyline(highwayCoordinates, { color: 'green', weight: 5 }).addTo(map);

// Add a popup to the polyline
highwayLine.bindPopup("<b>McArthur Highway</b><br>Status: Passable.<br>Select a color to indicate flood status.");

// Function to update the color of the polyline
function updateLineColor(color) {
    highwayLine.setStyle({ color: color });
}

// Event listener for color change
document.getElementById('colorSelect').addEventListener('change', function (e) {
    const selectedColor = e.target.value;
    updateLineColor(selectedColor);
    // Automatically open the popup after color change
    highwayLine.openPopup();
});
