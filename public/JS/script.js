(() => {
  "use strict";
  const forms = document.querySelectorAll(".needs-validation");
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();

document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-content");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-que");

    question.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });
});
