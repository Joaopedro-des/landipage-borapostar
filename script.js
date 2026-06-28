// Centralize aqui os links de checkout da Ticto para cada botão.
// Basta substituir as URLs abaixo pelos links reais gerados na Ticto.
const TICTO_LINKS = {
  hero: "https://ticto.app/SEU-LINK-PRINCIPAL",
  starter: "https://ticto.app/SEU-LINK-STARTER",
  pro: "https://ticto.app/SEU-LINK-PRO",
  black: "https://ticto.app/SEU-LINK-BLACK"
};

document.querySelectorAll("[data-ticto]").forEach((el) => {
  const key = el.dataset.ticto;
  if (TICTO_LINKS[key]) {
    el.setAttribute("href", TICTO_LINKS[key]);
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  }
});

// Header muda de aparência ao rolar a página
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 10);
});

// Menu mobile
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

navToggle.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => mainNav.classList.remove("open"));
});

// Animação de entrada (fade + slide) ao rolar
const revealEls = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealEls.forEach((el) => observer.observe(el));
