let currentSlide = 0;
const images = [
    "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", , "8.jpg",
    "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg"
];
const totalSlides = images.length;
const imageGallery = document.querySelector('.image-gallery');

function showSlide(index) {
    imageGallery.innerHTML = `<img src="${images[index]}" alt="Football Image ${index + 1}">`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Show the first slide initially
showSlide(currentSlide);
