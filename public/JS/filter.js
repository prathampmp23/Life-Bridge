// const tabBox = document.querySelector(".tabs-box");
// allTabs = document.querySelectorAll(".tab");
// arrowIcon = document.querySelectorAll(".icons i");

// let isDragging = false;

// const handleIcon = () => {
//   let scrollVal = Math.round(tabBox.scrollLeft);
//   let maxScrollableWidth = tabBox.scrollWidth - tabBox.clientWidth;
//   console.log(maxScrollableWidth, scrollVal);
//   arrowIcon[0].parentElement.style.display = scrollVal > 0 ? "flex" : "none";
//   arrowIcon[1].parentElement.style.display =
//     maxScrollableWidth > scrollVal ? "flex" : "none";
// };

// arrowIcon.forEach((icon) => {
//   icon.addEventListener("click", () => {
//     // if clicked iconis left , reduce 350 from tabsbox scrollleft else add
//     tabBox.scrollLeft += icon.id === "left" ? -350 : 350;
//     setTimeout(() => handleIcon(), 50);
//   });
// });

// allTabs.forEach((tab) => {
//   tab.addEventListener("click", () => {
//     tabBox.querySelector(".active").classList.remove("active");
//     tab.classList.add("active");
//   });
// });

// const dragging = (event) => {
//   if (!isDragging) return;
//   tabBox.classList.add("dragging");
//   tabBox.scrollLeft -= event.movementX;
// };

// const dragStop = () => {
//   isDragging = false;
//   tabBox.classList.remove("dragging");
// };

// tabBox.addEventListener("mousedown", () => (isDragging = true));
// tabBox.addEventListener("mousemove", dragging);
// document.addEventListener("mouseup", dragStop);

document.addEventListener("DOMContentLoaded", function () {
  const filterWrapper = document.querySelector(".filter-wrapper");
  const scrollLeftButton = document.getElementById("scroll-left");
  const scrollRightButton = document.getElementById("scroll-right");
  allItems = document.querySelectorAll(".filter-item");
  const filterList = document.querySelector(".filter-list");

  // Initially hide the left button
  scrollLeftButton.style.visibility = "hidden";

  // Scroll Left Button
  scrollLeftButton.addEventListener("click", function () {
    filterWrapper.scrollBy({
      left: -150, // Adjust this value for the scrolling amount
      behavior: "smooth",
    });
  });

  // Scroll Right Button
  scrollRightButton.addEventListener("click", function () {
    filterWrapper.scrollBy({
      left: 150, // Adjust this value for the scrolling amount
      behavior: "smooth",
    });
  });

  // To add active class to the clicked filter-item
  allItems.forEach((tab) => {
    tab.addEventListener("click", () => {
      filterList.querySelector(".active").classList.remove("active");
      tab.classList.add("active");
    });
  });

  // Enable/disable buttons and toggle visibility based on scroll position
  function toggleButtons() {
    const scrollLeft = filterWrapper.scrollLeft;
    const maxScrollLeft = filterWrapper.scrollWidth - filterWrapper.clientWidth;

    if (scrollLeft === 0) {
      scrollLeftButton.style.visibility = "hidden"; // Hide left button
    } else {
      scrollLeftButton.style.visibility = "visible"; // Show left button
    }

    if (scrollLeft >= maxScrollLeft) {
      scrollRightButton.style.visibility = "hidden"; // Hide right button
    } else {
      scrollRightButton.style.visibility = "visible"; // Show right button
    }
  }

  // Update button state on scroll
  filterWrapper.addEventListener("scroll", toggleButtons);

  // Initial button state
  toggleButtons();
});

