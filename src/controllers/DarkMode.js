import Storage from "./Storage";

export default function toggleDarkMode(e) {
  e.preventDefault();
  let themeBtn = document.querySelector(".toogle-theme"),
    logo = document.querySelector(".logo"),
    theme = "light";
  if (themeBtn.innerText == "🌛") {
    themeBtn.innerText = "☀️";
    theme = "dark";
    Storage.val = { color: "dark" };
    logo.src = "./favicon-light.png";
  } else {
    themeBtn.innerText = "🌛";
    Storage.val = { color: "light" };
    logo.src = "./favicon.png";
  }
  document.documentElement.setAttribute("data-theme", theme);
  return false;
}
