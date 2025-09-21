// Array of background images
const bgImages = [
    "img/bg1.jpg",
    "img/bg2.jpg",
    "img/bg3.jpg",
    "img/bg4.jpg"
];

let current = 0;
const bodyBefore = document.body;

// Set initial background
document.body.style.setProperty('--bg-image', `url(${bgImages[current]})`);
document.body.style.backgroundImage = `url(${bgImages[current]})`;

// Function to change background with fade
function changeBackground() {
    const beforeLayer = document.body;
    beforeLayer.style.opacity = 0; // fade out

    setTimeout(() => {
        current = (current + 1) % bgImages.length;
        beforeLayer.style.backgroundImage = `url(${bgImages[current]})`;
        beforeLayer.style.opacity = 1; // fade in
    }, 1000); // match CSS transition duration
}

// Change every 5 seconds
setInterval(changeBackground, 5000);
