
const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
];

let currentIndex = 0;
const totalImages = images.length;

const galleryImage = document.querySelector('img');


function updateImage() {
    galleryImage.src = images[currentIndex];
}


document.getElementById('next-btn').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateImage();
});

document.getElementById('prev-btn').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateImage();
});


updateImage();

