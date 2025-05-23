document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".animate-on-load");

  // IntersectionObserver for viewport animations
  const observerOptions = {
    root: null, // Use the viewport as the root
    rootMargin: "0px", // Trigger when the element is fully in the viewport
    threshold: 0.1, // Trigger when 10% of the element is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  }, observerOptions);

  elements.forEach((element) => {
    observer.observe(element);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("page-loader");
  if (loader) {
    window.addEventListener("load", () => {
      loader.style.opacity = "0"; // Fade out the loader
      setTimeout(() => {
        loader.style.display = "none"; // Hide the loader completely
      }, 1000); // Match the CSS transition duration (1 second)
    });
  }

  // IntersectionObserver for viewport animations
  const elements = document.querySelectorAll(".animate-on-load");
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  elements.forEach((element) => {
    observer.observe(element);
  });
});