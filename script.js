const toggleBtn = document.getElementById("toggleTheme");
const html = document.documentElement;

html.classList.remove("dark");

toggleBtn.addEventListener("click", () => {
  html.classList.toggle("dark");

  toggleBtn.textContent = html.classList.contains("dark")
    ? "Light Mode"
    : "Dark Mode";
});

const toggleGalleryBtn = document.getElementById("toggleGallery");
const galleryGrid = document.getElementById("galleryGrid");

toggleGalleryBtn.addEventListener("click", () => {
  if (galleryGrid.classList.contains("hidden")) {
    galleryGrid.classList.remove("hidden");
    toggleGalleryBtn.textContent = "Hide Gallery";
  } else {
    galleryGrid.classList.add("hidden");
    toggleGalleryBtn.textContent = "Show Gallery";
  }
});
