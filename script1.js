// Get references to the map container and button
const mapContainer = document.getElementById('map');
const getLocationButton = document.getElementById('get-location');


// Function to handle location retrieval and address display
function handleLocation(position) {
  const userPosition = [position.coords.latitude, position.coords.longitude];
  map.setView(userPosition, 15); // Adjust zoom level as needed


  // Get the address from Nominatim
  getAddress(userPosition[0], userPosition[1])
    .then(address => {
      // Display the address on the webpage
      document.getElementById('address-display').textContent = address;
    })
    .catch(error => {
      console.error('Error getting address:', error);
      alert('Error: Could not get your location or address');
    });
}


function handleError(error) {
  // Handle error, e.g., display an error message
  console.error('Error getting location:', error);
  alert('Error: Could not get your location');
}


// Add click event listener to the button
getLocationButton.addEventListener('click', () => {
  navigator.geolocation.getCurrentPosition(handleLocation, handleError);
});


// **Existing map initialization code:**


// Set initial center coordinates (replace with your desired location)
const center = [13.1231, 79.9120]; // Example coordinates, replace with your preferred location


// Create the map
const map = L.map(mapContainer).setView(center, 13);


// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


// Function to get address from coordinates using Nominatim
async function getAddress(latitude, longitude) {
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.display_name;
}


// Add element to display address
const addressDisplay = document.createElement('p');
addressDisplay.id = 'address-display';
document.body.appendChild(addressDisplay);



