// Array of background images
const bgImages = [
    "img/bg1.jpg",
    "img/bg2.jpg",
    "img/bg3.jpg",
    "img/bg4.jpg"
];

let current = 0;
const bg = document.getElementById("bg-slideshow");

// Set initial background
bg.style.backgroundImage = `url(${bgImages[current]})`;

function changeBackground() {
    // Fade out
    bg.style.opacity = 0;

    setTimeout(() => {
        // Move to next image
        current = (current + 1) % bgImages.length;
        bg.style.backgroundImage = `url(${bgImages[current]})`;
        // Fade in
        bg.style.opacity = 1;
    }, 1000); // matches CSS transition duration
}

// Change every 5 seconds
setInterval(changeBackground, 5000);
