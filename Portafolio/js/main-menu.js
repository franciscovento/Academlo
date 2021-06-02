// OBTENER ELEMENTOS DE HTML
let responsiveMenuBtn = document.getElementById("responsive-menu-btn");
let mainMenu = document.getElementById("main-menu");

//PARA CONTROLAR EL MENU
let flagMenu = false;

//FUNCIONES



// EVENTOS

responsiveMenuBtn.addEventListener("click", function() {
    //   mainMenu.setAttribute("class", "open-menu-responsive");
  
    //Si el flag no existe, podemos decir que el menú está cerrado
    if (flagMenu === false) {
      mainMenu.classList.add("open-menu-responsive");
      // mainMenu.setAttribute("class", "open-menu-responsive");
  
      flagMenu = true;
    }
    //Si el flag existe, podemos decir que el menú está abierto
    else {
      mainMenu.classList.remove("open-menu-responsive");
      // mainMenu.removeAttribute("class", "open-menu-responsive");
  
      flagMenu = false;
    }
  });