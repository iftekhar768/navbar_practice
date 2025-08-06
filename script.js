const btn = document.getElementById("btn");
const navbar = document.getElementById("navbar");

btn.addEventListener("click", () => {
  navbar.classList.toggle("vertical");
});
