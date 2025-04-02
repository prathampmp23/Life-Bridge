document.getElementById("openPopup").addEventListener("click", function () {
  document.getElementById("popupForm").style.display = "block";
});

document.getElementById("closePopup").addEventListener("click", function () {
  document.getElementById("popupForm").style.display = "none";
});

document
  .getElementById("togglePastCamps")
  .addEventListener("click", function () {
    let pastCampsSection = document.getElementById("pastCampsSection");
    if (pastCampsSection.style.display === "none") {
      pastCampsSection.style.display = "block";
      this.textContent = "📅 Hide Past Camps";
    } else {
      pastCampsSection.style.display = "none";
      this.textContent = "📅 Show Past Camps";
    }
  });
