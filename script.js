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
  {
    filename: "rezeroln.png",
    title: "Re:Zero Starting life in another world from zero",
    description: "One of my most favourite isekai novels of all time where the protagonist is gifted the power to return back to a save point everytime he dies.",
  },
  {
    filename: "NGNLln.png",
    title: "No Game No Life",
    description: "Another one of my favourite isekais where a gamer duo is dropped into a world where games are everything. Seeing their journey to world domination is interesting.",
  },
  {
    filename: "konosubaln.jpg",
    title: "Gods Blessings on this wonderful world",
    description: "One of the funniest isekais novel ever, if not the funniest. The cast is very loveable and i feel like im part of the game whenever i read about their journeys.",
  },
  {
    filename: "Coteln.png",
    title: "Classroom of the elite",
    description: "A very interesting novel where the protagonist is hiding many secrets from not just the people around him but from us, the readers as well.",
  },
  {
    filename: "oregairuln.png",
    title: "My Teenage Romantic Comedy Snafu",
    description: "One of my favourite slice of life novels due to its very relatable protagonist initially. I have since developed and matured with him as a person.",
  },
  {
    filename: "chitoseln.png",
    title: "Chitose Is In The Ramune Bottle",
    description: "A very interesting take on the slice of life genre with the concept of the novel revolving around 'Riajuus' aka Normies POV of the world",
  },
  // Add more image filenames as needed
];

function addImagesToContainer() {
  const container = document.querySelector(".image-container");
  container.innerHTML = ""; // Clear existing content before adding images

  const numberOfDuplications = 20; // You can adjust this value as needed
  const duplicateImageUrls = [];
  for (let i = 0; i < numberOfDuplications; i++) {
    duplicateImageUrls.push(...imageUrls);
  }

  duplicateImageUrls.forEach((imageDetails) => {
    const imageUrl = `images/${imageDetails.filename}`;
    const div = document.createElement("div");
    div.style.backgroundImage = `url(${imageUrl})`;

    // Create an image element and add it to the div
    const imageElement = new Image();
    imageElement.src = imageUrl;

    // Set the image size to match the desired size in the CSS
    imageElement.style.maxWidth = "60vw";
    imageElement.style.maxHeight = "60vh";

    div.appendChild(imageElement);

    // Update the event listener to open the modal with the specific image details
      imageElement.addEventListener("click", () => openModal(imageDetails));

    container.appendChild(div);
  });
}

let currentX = 0;
const distanceToMove = 0.5; // Adjust this value to control the animation speed

function moveImages() {
  const container = document.querySelector(".image-container");
  const containerWidth = container.clientWidth;

  // Calculate the total width of images and the duration for the animation
  const imageCount = imageUrls.length;
  const totalImageWidth = imageCount * (containerWidth / 4); // Display 4 images at a time
  const duration = totalImageWidth / distanceToMove; // Adjust the duration based on the distance to move

  // Calculate the distance to move based on time
  currentX -= distanceToMove;
  if (currentX <= -(totalImageWidth - containerWidth)) {
    currentX = 0;
  }

  // Move the container
  container.style.transform = `translateX(${currentX}px)`;

  // Request the next frame
  requestAnimationFrame(moveImages);

  // Adjust the duration to maintain a smooth animation
  container.style.animation = `scrollAnimation ${duration}s linear infinite`;
}

// Start the animation on page load
moveImages();

function openModal(imageDetails) {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const closeBtn = document.getElementById("close");

  const imageUrl = `images/${imageDetails.filename}`;
  modalImage.innerHTML = ""; // Clear previous image, if any
  const imageElement = new Image();
  imageElement.src = imageUrl;
  imageElement.style.maxWidth = "100%"; // To fit the modal content
  imageElement.style.maxHeight = "100%";
  modalImage.appendChild(imageElement);

  modalTitle.textContent = imageDetails.title;
  modalDescription.textContent = imageDetails.description;
  modal.style.display = "block";

  closeBtn.onclick = () => closeModal();
  modal.onclick = (event) => {
    if (event.target === modal || event.target === closeBtn) {
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

//show schedule when clicked
function showtable(){
  table = document.querySelector('.schedule')
  table.classList.add('clicked')
}