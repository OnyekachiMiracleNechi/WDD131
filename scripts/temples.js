document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;




document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('active'); // Toggle the 'active' class
        hamburger.textContent = navMenu.classList.contains('active') ? '✖' : '☰'; // Change to "X" or hamburger
    });
});

