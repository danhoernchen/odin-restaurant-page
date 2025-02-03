import welcomePage from "./welcome.js";
import about from "./about.js";
import menu from "./menu.js";

const contentDiv = document.getElementById("content");
const buttons = document.querySelectorAll("button");

function changePage(e) {
  switch (e.target.id) {
    case "home-btn":
      contentDiv.innerHTML = "";
      contentDiv.append(welcomePage());
      break;
    case "about-btn":
      contentDiv.innerHTML = about;
      break;
    case "menu-btn":
      contentDiv.innerHTML = menu;
      break;
  }
}

buttons.forEach((button) => button.addEventListener("click", changePage));

contentDiv.append(welcomePage());
