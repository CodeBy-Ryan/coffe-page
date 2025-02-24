function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src = "./img/icons8-menu-quadrado-48.png";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src = "./img/iconx.png";
  }
}
