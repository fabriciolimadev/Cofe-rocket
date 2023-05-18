//NAV MENU MOBILE
const hamburguer = document.querySelector(".hamburguer");
const menu = document.querySelector(".menu-md");

hamburguer.addEventListener("click", () => { // Ao clicar abre e fecha o menu e altera o icone do hambuguer
  if (!hamburguer.classList.contains("active")) {
    hamburguer.src = "/src/images/menu-buguer-close.svg";
  } else {
    hamburguer.src = "/src/images/menu-buguer-open.svg";
  }

  hamburguer.classList.toggle("active");
  menu.classList.toggle("active");
});
//Fecha o menu após clicar em qualquer item
// const items = document.querySelectorAll(".link-menu-md");

// items.forEach((item) => {
//   item.addEventListener("click", () => {
//     hamburguer.classList.remove("active");
//     hamburguer.src = "/src/images/menu-buguer-open.svg";
//     menu.classList.remove("active");
//   });
// });
