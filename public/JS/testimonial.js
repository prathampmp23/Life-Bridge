let index = 0;
const testimonials = document.querySelectorAll(".testimonial");
const slider = document.querySelector(".testimonial-slider");
const visibleCards = 3; // Number of cards to show at a time
const totalCards = testimonials.length;

function showSlide() {
  let shiftAmount = (index * 100) / visibleCards;
  slider.style.transform = `translateX(-${shiftAmount}%)`;
}

function nextSlide() {
  if (index < totalCards - visibleCards) {
    index++;
  } else {
    index = 0;
  }
  showSlide();
}

function prevSlide() {
  if (index > 0) {
    index--;
  } else {
    index = totalCards - visibleCards;
  }
  showSlide();
}

setInterval(nextSlide, 3000); // Auto-slide every 3 seconds
