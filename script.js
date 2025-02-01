var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = function (event) {
  event.preventDefault(); // Empêche le retour en haut
  openNav();
};

closeBtn.onclick = function (event) {
  event.preventDefault(); // Empêche le retour en haut
  closeNav();
};

/* Ouvrir la sidenav */
function openNav() {
  sidenav.classList.add("active");
}

/* Fermer la sidenav */
function closeNav() {
  sidenav.classList.remove("active");
}
