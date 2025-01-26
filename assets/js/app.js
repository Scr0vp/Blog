document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to Paris Monuments!');
    
    // Select the menu toggle button and nav links
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
	
	console.log(menuToggle); // Should log the button element
	console.log(navLinks);   // Should log the nav-links container

    // Check if the elements exist before adding event listeners
    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("show");
        });
    } else {
        console.error("Menu toggle button or nav links not found in the DOM.");
    }
});
