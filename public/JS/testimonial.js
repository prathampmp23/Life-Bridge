document.addEventListener("DOMContentLoaded", () => {
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");
  const cardWrapper = document.querySelector(".card-wrapper");
  let translateX = 0;
  const translateAmount = 350; // Adjust as needed
  const maxTranslate = -(cardWrapper.scrollWidth - cardWrapper.clientWidth);

  nextBtn.addEventListener("click", () => {
    if (translateX > maxTranslate) {
      translateX -= translateAmount;
    } else {
      translateX = 0; // Reset to first card
    }
    cardWrapper.style.transform = `translateX(${translateX}px)`;
  });

  prevBtn.addEventListener("click", () => {
    if (translateX < 0) {
      translateX += translateAmount;
    } else {
      translateX = maxTranslate; // Move to last card
    }
    cardWrapper.style.transform = `translateX(${translateX}px)`;
  });
});
