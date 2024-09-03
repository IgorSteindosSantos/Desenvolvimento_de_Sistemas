// Hamburger menu selections

// scroll-to-top selection
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
// Hamburger menu functionality
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("ul");
hamburger.addEventListener('click', openMenu)

function openMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
// Theme switcher selection

// Close menu on nav menu clicks
const navLink = document.querySelectorAll("#nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));
function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
// scroll to top functionality

// Theme switcher functionality
const checkbox = document.querySelector("#checkbox");

checkbox.addEventListener("change", () => {
  // Toggle website theme
  document.body.classList.toggle("dark");
});