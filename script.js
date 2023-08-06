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

let imageUrls = [
    "rezeroln.png",
    "NGNLln.png",
    "konosubaln.jpg",
    "Coteln.png",
    "oregairuln.png",
    "chitoseln.png"
    // Add more image filenames as needed
  ];

function addImagesToContainer() {
    const container = document.querySelector(".image-container");
    container.innerHTML = ""; // Clear existing content before adding images

    // Increase the number of duplications to make the loop happen faster
    const numberOfDuplications = 20; // You can adjust this value as needed
    const duplicateImageUrls = [];
    for (let i = 0; i < numberOfDuplications; i++) {
      duplicateImageUrls.push(...imageUrls);
    }

    duplicateImageUrls.forEach((url) => {
      const imageUrl = `images/${url}`; // Assuming images are in a folder named 'images'
      const div = document.createElement("div");
      div.style.backgroundImage = `url(${imageUrl})`;
      div.addEventListener("click", () => openModal(imageUrl)); // Add click event listener
      container.appendChild(div);
    });

    // Calculate the total width of images and set it as the container width
    const images = container.children;
    const totalImageWidth = images.length * (images[0].clientWidth + 10); // Width of each image + margin
    container.style.width = `${totalImageWidth}px`;

    // Start the animation
    moveImages();
  }
  
  let currentX = 0;

  function moveImages() {
    const container = document.querySelector(".image-container");
    const containerWidth = container.clientWidth;

    // Calculate the duration based on the total width of images and the container width
    const imageCount = imageUrls.length;
    const totalImageWidth = imageCount * (containerWidth / 4); // Display 4 images at a time
    const duration = (totalImageWidth - containerWidth) * 11; // Adjust '10' to control the animation speed

    // Calculate the distance to move based on time
    currentX = (currentX - 1) % totalImageWidth;
    if (currentX === -(totalImageWidth - containerWidth)) {
      currentX = 0;
    }

    // Move the container
    container.style.transform = `translateX(${currentX}px)`;

    // Request the next frame
    requestAnimationFrame(moveImages);
  }

  function openModal(imageUrl) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");
    const closeBtn = document.getElementById("close");

    modalImage.style.backgroundImage = `url(${imageUrl})`;
    modal.style.display = "block";

    closeBtn.onclick = () => closeModal();
    modal.onclick = (event) => {
      if (event.target === modal) {
        closeModal();
      }
    };
  }

  function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
  }

  addImagesToContainer();

  let slideIndex = 1;
const slides = document.getElementsByClassName("carousel-slider")[0].children;
const dots = document.getElementsByClassName("dot");

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("active");
  }

  if (slideIndex > slides.length) {
    slideIndex = 1;
  } else if (slideIndex < 1) {
    slideIndex = slides.length;
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");

  // Show the caption of the current slide
  const captions = slides[slideIndex - 1].querySelector(".caption");
  captions.style.display = "block";
}

function plusSlides(n) {
  slideIndex += n;
  showSlides();
}

function currentSlide(n) {
  slideIndex = n;
  showSlides();
}

document.querySelector(".prev-btn").addEventListener("click", () => plusSlides(-1));
document.querySelector(".next-btn").addEventListener("click", () => plusSlides(1));

const dotsArray = Array.from(dots);
dotsArray.forEach((dot, index) => {
  dot.addEventListener("click", () => currentSlide(index + 1));
});

showSlides(); // To display the first slide
setInterval(() => plusSlides(1), 3000); // Automatic sliding