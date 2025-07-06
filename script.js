// Get the current weather
document.getElementById('get-weather').addEventListener('click', function() {
    // Use the OpenWeatherMap API to get the current weather
    fetch('https://api.openweathermap.org/data/2.5/weather?q=California,US&units=imperial&appid=YOUR_API_KEY')
        .then(response => response.json())
        .then(data => {
            const currentWeather = document.getElementById('current-weather');
            currentWeather.textContent = `Current temperature: ${data.main.temp}°F`;
            currentWeather.classList.add('fade-in');
        })
        .catch(error => console.error('Error:', error));
});

// Add event listener to the nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const sectionId = link.getAttribute('href').split('#')[1];
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Add event listener to the images
document.querySelectorAll('img').forEach(image => {
    image.addEventListener('load', function() {
        image.classList.add('fade-in');
    });
});