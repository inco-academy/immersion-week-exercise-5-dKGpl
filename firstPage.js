document.head.title = "My first (dynamic) webpage";
const allH2 = document.querySelectorAll("h2");
let buttonThen = "",
    buttonNow = "";
for (h2 of allH2) {
  if (h2.innerText === "Then") {
    buttonThen = h2.addEventListener("click", () =>
      alert("The Beatles (January 13, 1969)")
    );
  }
  if (h2.innerText === "Now") {
    buttonNow = h2.addEventListener("click", () =>
      alert("Carly Rae Jepsen (March 1, 2012)")
    );
  }
}
