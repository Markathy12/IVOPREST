const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const menuLinks = document.querySelectorAll(".nav-menu a"); // Tous les liens du menu

// Ouvrir / Fermer le menu lors du clic sur le bouton hamburger
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Fermer le menu lors du clic sur un lien
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Fermer le menu si l'utilisateur clique à l'extérieur
document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
});
