const container = document.querySelector("#container");
const slider = document.querySelector("#size");
const sliderLabel = document.querySelector("#sliderLabel");
let squares;
let rows;

let size = 16;
function drawBoard() {
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
  squares = document.querySelectorAll(".square");
  rows = document.querySelectorAll(".row");
}

drawBoard();

function eraseBoard() {
  rows.forEach((row) => {
    container.removeChild(row);
  });
}

container.addEventListener("mousedown", (event) => {
  console.log("mouse down");
  event.preventDefault();
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

slider.addEventListener("change", () => {
//   sliderLabel.textContent = `Grid Size: ${slider.value} x ${slider.value}`;
//   size = slider.value;
  eraseBoard();
  drawBoard();
});

slider.addEventListener("input", () => {
  sliderLabel.textContent = `Grid Size: ${slider.value} x ${slider.value}`;
  size = slider.value;
});
