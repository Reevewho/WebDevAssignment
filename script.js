// Function to update the margin-right property of #home based on window width
function updateHomeMargin() {
    const home = document.getElementById('home');
    if (window.innerWidth <= 768) {
        home.classList.remove('home-margin');
    } else {
        home.classList.add('home-margin');
    }
}

// Add an event listener to detect window resize and call the updateHomeMargin function
window.addEventListener('resize', updateHomeMargin);

// Call the function initially to set the correct margin on page load
updateHomeMargin();

// script.js
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    const scrollTop = window.scrollY;

    if (scrollTop > 0) {
        navbar.classList.add("navbar-solid");
    } else {
        navbar.classList.remove("navbar-solid");
    }
});
