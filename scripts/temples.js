document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;


document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');


    // Toggle the navigation menu
    hamburger.addEventListener('click', function() {
        navMenu.style.display = (navMenu.style.display === 'block') ? 'none' : 'block';
    }
    )});
