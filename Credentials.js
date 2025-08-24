// Add this inside the DOMContentLoaded event
document.getElementById('next-btn').addEventListener('click', nextImage);
document.getElementById('prev-btn').addEventListener('click', prevImage);

const images = [
    "IS-1000_screenshot.png", "IS-1001_screenshot.png", 
    "IS-1002_screenshot.png", "IS-1006_screenshot.png", 
    "IS-1007_screenshot.png", "IS-1008_screenshot.png", 
    "IS-1009_screenshot.png", "IS-1011_screenshot.png", 
    "IS-1012_screenshot.png", "IS-1013_screenshot.png", 
    "IS-1015_screenshot.png", "IS-1016_screenshot.png"];
let currentIndex = 0;

function updateImage() {
  const imageElement = document.getElementById("FEMA-img");
  imageElement.src = images[currentIndex];
}

function nextImage() {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    updateImage();
  }
}

function prevImage() {
  if (currentIndex > 0) {
    currentIndex--;
    updateImage();
  }
}

// Add this at the end of your JS file
document.addEventListener('DOMContentLoaded', function() {
  updateImage();
});