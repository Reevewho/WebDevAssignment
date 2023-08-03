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

// Check if the current page is the home page (index.html)
function isOnHomePage() {
    return document.title === 'Home';
}
if (isOnHomePage()) {
    // Add the scroll event listener only for the home page
    window.addEventListener("scroll", function () {
        const scrollTop = window.scrollY;
        const navbar = document.getElementById("navbar");

        if (scrollTop > 0) {
            navbar.classList.add("navbar-solid");
        } else {
            navbar.classList.remove("navbar-solid");
        }
    });
} else {
    // For all other pages, make the navbar solid permanently
    const navbar = document.getElementById("navbar");
    navbar.classList.add("navbar-solid");
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
    }
    
//form input storage
function response() {

    //assign variables with the input values according to ID
    var nameInput = document.getElementById("name");
    var name = nameInput.value;
    var numInput = document.getElementById("num");
    var num = numInput.value;
    var msgInput = document.getElementById("msg");
    var msg = msgInput.value;

    // Store the input values in sessionStorage to be retrieved from function showresponse
    sessionStorage.setItem("namedata", name);
    sessionStorage.setItem("numdata", num);
    sessionStorage.setItem("msgdata", msg);


}
function showresponse(){
    // Retrieve values from sessionStorage
    var newName = sessionStorage.getItem("namedata");
    var newNum = sessionStorage.getItem("numdata");
    var newMsg = sessionStorage.getItem("msgdata");

    // Write out the values in the response page
    document.getElementById("name-response").innerText = newName;
    document.getElementById("num-response").innerText = newNum;
    document.getElementById("msg-response").innerText = newMsg;
}





