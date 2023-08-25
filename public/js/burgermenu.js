function burger() {
  var menu = document.querySelector(".menu ul");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

function menuLayout() {
  var menu = document.querySelector(".menu ul");
  var windowWidth = window.innerWidth;
  if (windowWidth < 580) {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}
window.addEventListener("resize", menuLayout);
menuLayout();