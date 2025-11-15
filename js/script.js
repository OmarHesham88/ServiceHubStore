const navLinks = document.getElementById("navLinks");
const menuToggle = document.getElementById("menuToggle");
const yearSpan = document.getElementById("year");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

yearSpan.textContent = new Date().getFullYear();

if (window.Splide) {
  const slider = new Splide("#productSlider", {
    type: "loop",
    autoWidth: true,
    pagination: false,
    arrows: false,
    drag: "free",
    focus: "center",
    breakpoints: {
      700: {
        focus: "left",
      },
    },
    autoScroll: {
      speed: 0.9,
      pauseOnHover: true,
    },
  });

  const extensions = window.splide?.Extensions || {};
  slider.mount(extensions);
}
