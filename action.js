const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// Movie Select Event
movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
});

// Seat click event
container.addEventListener('click', e => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');
  }
  updateSelectedCount();
});

// Function to shuffle array randomly
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function changeSeats() {
  var restaurant = document.getElementById("movie").value;
  var seats = document.querySelectorAll(".seat");
  var occupiedSeats = document.querySelectorAll(".occupied");

  // Clear occupied seats
  occupiedSeats.forEach(function(seat) {
    seat.classList.remove("occupied");
  });

  // Randomly shuffle seats
  const shuffledSeats = shuffleArray(Array.from(seats));

  // Mark selected number of seats as occupied
  for (let i = 0; i < restaurant / 50; i++) {
    shuffledSeats[i].classList.add("occupied");
  }

  // Update seat colors
// Update restaurant options based on location selection
function updateRestaurants() {
  const location = document.querySelector('select[name="Location"]').value;
  const restaurantSelect = document.getElementById('movie');
  const restaurants = restaurantData[location] || [];

  // Clear existing options
  restaurantSelect.innerHTML = '';

  // Add default option if location is not selected
  if (location === "Location") {
    const defaultOption = document.createElement('option');
    defaultOption.text = 'Select a Location first';
    restaurantSelect.appendChild(defaultOption);
  } else {
    // Add restaurants for the selected location
    restaurants.forEach(restaurant => {
      const option = document.createElement('option');
      option.value = restaurant.price; // Set value to restaurant price
      option.text = `${restaurant.name} (${restaurant.price}rs)`; // Display restaurant name and price
      restaurantSelect.appendChild(option);
    });
  }
  
  // Hide or show the seat selection container based on location selection
  const container = document.querySelector('.movie-container');
  container.style.display = location === "Location" ? "none" : "block";
}

// Update seat availability based on restaurant selection
function changeSeats() {
  const restaurant = document.getElementById("movie").value;
  const seats = document.querySelectorAll(".seat");
  const occupiedSeats = document.querySelectorAll(".occupied");

  // Clear occupied seats
  occupiedSeats.forEach(function(seat) {
    seat.classList.remove("occupied");
  });

  // Randomly shuffle seats
  const shuffledSeats = shuffleArray(Array.from(seats));

  // Mark selected number of seats as occupied
  if (restaurant !== "Location") { // Only update seats if a restaurant is selected
    for (let i = 0; i < restaurant / 50; i++) {
      shuffledSeats[i].classList.add("occupied");
    }
  }

  // Update seat colors
  updateSelectedCount();
}

// Initialize restaurant options and seat selection visibility
updateRestaurants();
}
function showRestaurants() {
      var locationSelect = document.getElementById("locationSelect");
      var selectedLocation = locationSelect.value;
      var restaurantContainer = document.getElementById("restaurantContainer");
      var restaurantSelect = document.getElementById("movie");
  
      // Clear previous options
      restaurantSelect.innerHTML = '';
  
      if (selectedLocation !== "Location") {
        // Show the restaurant container
        restaurantContainer.style.display = "block";
  
        // Add restaurants based on the selected location
        switch (selectedLocation) {
          case "Chennai":
            addOption(restaurantSelect, "Kora Foods (250rs)", "250");
            addOption(restaurantSelect, "S2S Biriyani (200rs)", "200");
            addOption(restaurantSelect, "Seeraga Samba Beef Biriyani (150rs)", "150");
            addOption(restaurantSelect, "UPM Gossips (100rs)", "100");
            break;
          case "Nungambakkam":
            addOption(restaurantSelect, "Asif Biriyani(150rs)", "150");
            addOption(restaurantSelect, "Raguman Biriyani(200rs)", "200");
            break;
          case "paris":
            addOption(restaurantSelect, "KFC (180rs)", "180");
            addOption(restaurantSelect, "Mac (220rs)", "220");
            break;
          case "porur":
            addOption(restaurantSelect, "Wedding Biriyani (300rs)", "300");
            addOption(restaurantSelect, "Silon (400rs)", "400");
            break;
          default:
            break;
        }
      } else {
        // Hide the restaurant container if no location selected
        restaurantContainer.style.display = "none";
      }
    }
  
    function showRestaurants() {
      var locationSelect = document.getElementById("locationSelect");
      var selectedLocation = locationSelect.value;
      var restaurantContainer = document.getElementById("restaurantContainer");
      var restaurantSelect = document.getElementById("movie");
  
      // Clear previous options
      restaurantSelect.innerHTML = '';
  
      if (selectedLocation !== "Location") {
        // Show the restaurant container
        restaurantContainer.style.display = "block";
  
        // Add restaurants based on the selected location
        switch (selectedLocation) {
          case "Chennai":
            addOption(restaurantSelect, "Kora Foods (250rs)", "250");
            addOption(restaurantSelect, "S2S Biriyani (200rs)", "200");
            addOption(restaurantSelect, "Seeraga Samba Beef Biriyani (150rs)", "150");
            addOption(restaurantSelect, "UPM Gossips (100rs)", "100");
            break;
          case "Nungambakkam":
            addOption(restaurantSelect, "Asif Biriyani(150rs)", "150");
            addOption(restaurantSelect, "Raguman Biriyani(200rs)", "200");
            break;
          case "Paris":
            addOption(restaurantSelect, "KFC (180rs)", "180");
            addOption(restaurantSelect, "Mac (220rs)", "220");
            break;
          case "Porur":
            addOption(restaurantSelect, "Wedding Biriyani (300rs)", "300");
            addOption(restaurantSelect, "Silon (400rs)", "400");
            break;
          default:
            break;
        }
      } else {
        // Hide the restaurant container if no location selected
        restaurantContainer.style.display = "none";
      }
    }
  
    function addOption(selectElement, text, value) {
      var option = document.createElement("option");
      option.text = text;
      option.value = value;
      selectElement.add(option);
    }
    // JavaScript code to update hidden inputs with restaurant details and seat selections
function updateFormFields() {
  var restaurantSelect = document.getElementById("movie");
  var selectedRestaurant = restaurantSelect.options[restaurantSelect.selectedIndex].text;
  var selectedSeats = document.querySelectorAll(".seat.selected").length;
  
  document.getElementById("restaurantSelection").value = selectedRestaurant;
  document.getElementById("seatSelection").value = selectedSeats;
}

      // Send data to server
      fetch('send-email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      .then(response => {
        if (response.ok) {
          alert('Reservation successful. You will receive an email shortly.');
          document.getElementById('reservationForm').reset();
        } else {
          alert('Failed to make reservation. Please try again later.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Failed to make reservation. Please try again later.');
      });
    // Form submission
    document.getElementById('reservationForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      sendEmail(); // Call function to send email
    });