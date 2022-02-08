const divs = document.querySelectorAll("div"),
      buttons = [];
let square = "";
for (const div of divs) {
  if (div.id === "square") {
    square = div;
  } else {
    div.addEventListener(
      "mouseover",
      () => (square.style.backgroundColor = div.id)
    );
  }
}
