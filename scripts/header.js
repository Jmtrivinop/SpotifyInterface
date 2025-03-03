document.addEventListener("DOMContentLoaded", function () {
  console.log("Script cargado correctamente");

  // Función para manejar menús desplegables
  function setupDropdowns(container) {
    container.querySelectorAll(".dropdown-trigger").forEach(trigger => {
      let parentDropdown = trigger.closest(".dropdown");
      let menu = parentDropdown.querySelector(".dropdown-menu");

      if (!menu) return;

      trigger.addEventListener("click", function (event) {
        console.log(`Clic en ${trigger.textContent.trim() || "icono"}`);
        event.stopPropagation(); // Evita que el evento se propague

        // Cierra otros menús antes de abrir este
        container.querySelectorAll(".dropdown-menu").forEach(m => {
          if (m !== menu) m.classList.remove("is-active");
        });

        menu.classList.toggle("is-active");
      });
    });
  }

  // Aplicar la lógica de menús desplegables al menú principal
  setupDropdowns(document);

  // Aplicar la lógica de menús desplegables al menú móvil
  let mobileDropdown = document.getElementById("mobile-dropdown");
  if (mobileDropdown) {
    setupDropdowns(mobileDropdown);
  }

  // Cerrar menús desplegables si se hace clic fuera de ellos
  document.addEventListener("click", function (event) {
    // Verifica si el clic fue fuera de cualquier menú desplegable
    if (!event.target.closest(".dropdown")) {
      document.querySelectorAll(".dropdown-menu").forEach(menu => {
        menu.classList.remove("is-active");
      });
    }
  });

  // === Menú desplegable en móviles ===
  let dropdownButton = document.getElementById("dropdown-button");
  let dropdownMenu = document.getElementById("dropdown-menu");

  if (dropdownButton) {
    dropdownButton.addEventListener("click", function (event) {
      console.log("Botón de menú clickeado");
      dropdownMenu.classList.toggle("is-active");
      event.stopPropagation(); // Evita que el evento se propague
    });

    document.addEventListener("click", function (event) {
      if (!dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove("is-active");
      }
    });
  } else {
    console.error("No se encontró el botón del menú");
  }

  // === Barra de búsqueda en móviles ===
  const searchIcon = document.getElementById("mobile-search-icon");
  const searchBar = document.getElementById("mobile-search");
  const searchInput = document.getElementById("mobile-search-input");

  if (searchIcon && searchBar && searchInput) {
    searchIcon.addEventListener("click", function (event) {
      event.stopPropagation();
      searchBar.classList.toggle("is-hidden");
      if (!searchBar.classList.contains("is-hidden")) {
        searchInput.focus();
      }
    });

    document.addEventListener("click", function (event) {
      if (!searchBar.contains(event.target) && !searchIcon.contains(event.target)) {
        searchBar.classList.add("is-hidden");
      }
    });
  }
});