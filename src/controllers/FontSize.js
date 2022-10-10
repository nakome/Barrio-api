export default function addFontSize(e, addPx) {
  e.preventDefault();
  let html = document.querySelector("html");
  let currentSize = parseFloat(
      window.getComputedStyle(html, null).getPropertyValue("font-size")
    );
  html.style.fontSize = currentSize + addPx + "px";
  return false;
}
