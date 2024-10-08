document.addEventListener('DOMContentLoaded', () => {
    // Update current year
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;

    // Update last modified date
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = lastModified;

    // Sample weather data (you can replace this with real data from an API)
    const weatherData = {
        temperature: "30°C",
        windSpeed: "10 km/h",
        windChill: "N/A" // Replace with actual wind chill data if available
    };

    // Update the weather section with data
    document.getElementById('temperature').textContent = weatherData.temperature;
    document.getElementById('windSpeed').textContent = weatherData.windSpeed;
    document.getElementById('windChill').textContent = weatherData.windChill;

    // Optional: Fetch real weather data from an API
    
    fetch('https://api.example.com/weather?location=lagos')
        .then(response => response.json())
        .then(data => {
            document.getElementById('temperature').textContent = data.temperature;
            document.getElementById('windSpeed').textContent = data.windSpeed;
            document.getElementById('windChill').textContent = data.windChill;
        })
        .catch(error => console.error('Error fetching weather data:', error));
    
});
