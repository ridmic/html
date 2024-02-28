const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".nav-menu");
/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("nav-active")) {
        menu.classList.remove("nav-active");
        
        // adds the menu (hamburger) icon 
        toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
    } else {
        menu.classList.add("nav-active");
        
        // adds the close (x) icon 
        toggle.querySelector("a").innerHTML = "<i class='fas fa-xmark'></i>";
    }
}
/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);

const items = document.querySelectorAll(".nav-item");
/* Activate Submenu */
function toggleItem() {
  if (this.classList.contains("nav-submenu-active")) {
    this.classList.remove("nav-submenu-active");
  } else if (menu.querySelector(".nav-submenu-active")) {
    menu.querySelector(".nav-submenu-active").classList.remove("nav-submenu-active");
    this.classList.add("nav-submenu-active");
  } else {
    this.classList.add("nav-submenu-active");
  }
}
/* Event Listeners */
for (let item of items) {
    if (item.querySelector(".nav-submenu")) {
      item.addEventListener("click", toggleItem, false);
      item.addEventListener("keypress", toggleItem, false);
    }   
}

/* Close Submenu From Anywhere */
function closeSubmenu(e) {
    if (menu.querySelector(".nav-submenu-active")) {
      let isClickInside = menu
        .querySelector(".nav-submenu-active")
        .contains(e.target);
      if (!isClickInside && menu.querySelector(".nav-submenu-active")) {
        menu.querySelector(".nav-submenu-active").classList.remove("nav-submenu-active");
      }
    }
  }
  /* Event listener */
  document.addEventListener("click", closeSubmenu, false);

