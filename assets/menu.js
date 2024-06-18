export function menu() {
  const $menu = document.querySelector(".menu");

  document.addEventListener("click", (e) => {
    if(e.target.matches(".btn-menu")) {
      $menu.classList.toggle("menu-hidden");
    }
  });
}