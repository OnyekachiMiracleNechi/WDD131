document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('nav ul');

    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        hamburger.textContent = navMenu.classList.contains('active') ? '✖' : '☰'; // Change to "X" or hamburgers
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.getElementById('cta-button');
    
    ctaButton.addEventListener('click', function() {
        // Navigate to the services page
        window.location.href = 'services.html';
    });
});


document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;

