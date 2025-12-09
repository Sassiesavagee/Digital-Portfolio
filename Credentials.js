// ...existing code...
document.addEventListener('DOMContentLoaded', () => {
  const images = [
    "IS-1000_screenshot.png",
    "IS-1001_screenshot.png",
    "IS-1002_screenshot.png",
    "IS-1006_screenshot.png",
    "IS-1007_screenshot.png",
    "IS-1008_screenshot.png",
    "IS-1009_screenshot.png",
    "IS-1011_screenshot.png",
    "IS-1012_screenshot.png",
    "IS-1013_screenshot.png",
    "IS-1015_screenshot.png",
    "IS-1016_screenshot.png"
  ];
  let currentIndex = 0;

  const imgEl = document.getElementById('FEMA-img');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');

  function updateImage() {
    if (imgEl) imgEl.src = images[currentIndex];
  }

  function nextImage() {
    if (currentIndex < images.length - 1) {
      currentIndex++;
      updateImage();
    } else {
      console.log('Reached the end of images');
    }
  }

  function prevImage() {
    if (currentIndex > 0) {
      currentIndex--;
      updateImage();
    }
  }

  // attach a single listener each
  nextBtn?.addEventListener('click', nextImage);
  prevBtn?.addEventListener('click', prevImage);

  // initialize
  updateImage();
});
// ...existing code...