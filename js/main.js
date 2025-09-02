let currentNews = 0;

function changeNewsSlide(direction) {
  const slides = document.querySelectorAll(".news-slide");
  if (!slides.length) return;

  // Sembunyikan slide aktif
  slides[currentNews].classList.remove("active");

  // Hitung index baru
  currentNews = (currentNews + direction + slides.length) % slides.length;

  // Tampilkan slide baru
  slides[currentNews].classList.add("active");
}