const container = document.querySelector("#container");

let size = 32;

for (let i = 0; i < size; i++) {
  let row = document.createElement("div");
  row.classList.add("row");
  for (let j = 0; j < size; j++) {
    let newSquare = document.createElement("div");
    newSquare.classList.add("square");
    row.appendChild(newSquare);
  }
  container.appendChild(row);
}

let squares = document.querySelectorAll(".square");

container.addEventListener("mousedown", (event) => {
  console.log("mouse down");
  event.preventDefault()
  held();
});

container.addEventListener("mouseup", () => {
  console.log("mouse up");
  released();
});

function blackPen() {
  this.classList.add("color");
}

function held() {
  squares.forEach((square) => {
    square.addEventListener("mouseenter", blackPen);
  });
}

function released() {
  squares.forEach((square) => {
    square.removeEventListener("mouseenter", blackPen);
  });
}
