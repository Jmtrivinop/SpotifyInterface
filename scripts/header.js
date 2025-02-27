document.addEventListener("DOMContentLoaded", function () {
    let dropdownButton = document.getElementById("dropdown-button");
    let dropdownMenu = document.getElementById("mobile-dropdown");

    if (dropdownButton) {
      dropdownButton.addEventListener("click", function (event) {
        console.log("Botón de menú clickeado");
        dropdownMenu.classList.toggle("is-active");
        event.stopPropagation();
      });

      document.addEventListener("click", function (event) {
        if (!dropdownMenu.contains(event.target)) {
          dropdownMenu.classList.remove("is-active");
        }
      });
    } else {
      console.error("No se encontró el botón del menú");
    }
  });

document.getElementById("mobile-search-icon").addEventListener("click", function () {
    document.getElementById("mobile-search").classList.toggle("is-active");
});