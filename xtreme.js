// Show / hide text
document.getElementById('toggleBtn').addEventListener('click', function () {
    const text = document.getElementById('extraText');

    if (text.style.display === 'none' || text.style.display === '') {
        text.style.display = 'block';
        this.textContent = 'Show Less';
    } else {
        text.style.display = 'none';
        this.textContent = 'Show More';
    }
});

// Slideshow logic
const nextBtn = document.getElementById('nextBtn');
const slideshow = document.getElementById('slideshow');
const slideImage = document.getElementById('slideImage');

const images = [
    'girlbackground.jpg',
    'fashionkilla.jpg',
    'girllisteningtomusic.jpg'
];

let currentIndex = 0;

nextBtn.addEventListener('click', () => {
    document.body.style.background = 'white';
    slideshow.style.display = 'block';
    window.scrollTo({ top: slideshow.offsetTop, behavior: 'smooth' });
});

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    slideImage.src = images[currentIndex];
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    slideImage.src = images[currentIndex];
});

// Modal elements
const modal = document.getElementById('pricingModal');
const openBtn = document.getElementById('openPricing');
const closeBtn = document.getElementById('closePricing');

// Function to open the modal
openBtn.onclick = function() {
    modal.style.display = 'flex';
}

// Function to close the modal via 'X'
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

// Function to close the modal by clicking outside the white box
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
