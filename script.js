const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const themeToggle = document.querySelector(".theme-toggle");

function setTheme(theme) {
  const isLight = theme === "light";
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("portfolio-theme", theme);
  themeToggle?.setAttribute("aria-pressed", String(isLight));
  themeToggle?.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
}

setTheme(document.documentElement.dataset.theme || "dark");

themeToggle?.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
  setTheme(nextTheme);
});

navToggle?.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    siteNav.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  }
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

const carouselDots = document.querySelectorAll(".carousel-dot");
const carouselPhotos = document.querySelectorAll(".carousel-photo");
const carouselDescriptions = document.querySelectorAll(".carousel-description");
let carouselTimer;

function showCarouselSlide(slide) {
  const descriptionSlide = slide === "1" ? "0" : slide === "3" || slide === "4" ? "2" : slide;

  carouselDots.forEach((item) => {
    const isActive = item.dataset.slide === slide;
    item.classList.toggle("active", isActive);
    item.setAttribute("aria-current", isActive ? "true" : "false");
  });

  carouselPhotos.forEach((photo) => {
    photo.classList.toggle("active", photo.dataset.slide === slide);
  });

  carouselDescriptions.forEach((description) => {
    description.classList.toggle("active", description.dataset.slide === descriptionSlide);
  });
}

function startCarouselTimer() {
  if (!carouselDots.length) return;

  window.clearInterval(carouselTimer);
  carouselTimer = window.setInterval(() => {
    const activeIndex = Array.from(carouselDots).findIndex((dot) => dot.classList.contains("active"));
    const nextDot = carouselDots[(activeIndex + 1) % carouselDots.length];
    showCarouselSlide(nextDot.dataset.slide);
  }, 5000);
}

carouselDots.forEach((dot) => {
  dot.addEventListener("click", () => {
    showCarouselSlide(dot.dataset.slide);
    startCarouselTimer();
  });
});

startCarouselTimer();
