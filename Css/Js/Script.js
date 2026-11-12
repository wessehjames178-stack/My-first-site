// OPPORTUNITY BRIDGE
// Main JavaScript file

document.addEventListener("DOMContentLoaded", function () {

    // Mobile navigation menu
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {

            navLinks.classList.toggle("active");

            // Change menu icon
            if (navLinks.classList.contains("active")) {
                menuToggle.innerHTML = "&times;";
            } else {
                menuToggle.innerHTML = "&#9776;";
            }

        });

    }

    // Close menu after clicking a navigation link
    const navigationItems = document.querySelectorAll(".nav-links a");

    navigationItems.forEach(function (item) {

        item.addEventListener("click", function () {

            if (navLinks) {
                navLinks.classList.remove("active");
                menuToggle.innerHTML = "&#9776;";
            }

        });

    });

});
