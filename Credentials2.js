// ...existing code...
document.addEventListener('DOMContentLoaded', () => {
  const images = [
    "Adult First Aid Certification.jpeg",
    "Basic Life Support Certification.jpeg",
    "Emergency Use of Medical Oxygen Certification.jpeg",
  ];
  let currentIndex = 0;

  const imgEl = document.getElementById('CPR-img');
  const prevBtn = document.getElementById('CPR-prev-btn');
  const nextBtn = document.getElementById('CPR-next-btn');

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