const slides = document.querySelectorAll(".slide");

for (const slide of slides) {
  slide.addEventListener("click", () => {
    clearActiveClassed();

    slide.classList.add("active");
  });
}

function clearActiveClassed() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}
