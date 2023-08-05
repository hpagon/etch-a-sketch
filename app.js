const container = document.querySelector("#container");
const slider = document.querySelector("#size");
const sliderLabel = document.querySelector("#sliderLabel");
const blackButton = document.querySelector("#black");
const colorPicker = document.querySelector("#colorPicker");
const colorButton = document.querySelector("#color");
const randomButton = document.querySelector("#random");
const eraserButton = document.querySelector("#eraser");
const clearButton = document.querySelector("#clear");
let squares;
let rows;
let size = 16;
let mode = 0;

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

function generateRandColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  return [red, green, blue];
}

container.addEventListener("mousedown", (event) => {
  console.log("mouse down");
  event.preventDefault();
  held(event);
});

container.addEventListener("mouseup", () => {
  console.log("mouse up");
  released();
});

function blackPen() {
  this.style.backgroundColor = "black";
}

function colorPen() {
  this.style.backgroundColor = `${colorPicker.value}`;
}

function randPen() {
  let colors = generateRandColor();
  this.style.backgroundColor = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]}`;
}

function whitePen() {
  this.style.backgroundColor = "white";
}

function held(event) {
  switch (mode) {
    case 0:
      event.target.style.backgroundColor = "black";
      squares.forEach((square) => {
        square.addEventListener("mouseenter", blackPen);
        square.addEventListener("click", blackPen);
      });
      break;
    case 1:
      event.target.style.backgroundColor = `${colorPicker.value}`;
      squares.forEach((square) => {
        square.addEventListener("mouseenter", colorPen);
        square.addEventListener("click", colorPen);
      });
      break;
    case 2:
      let colors = generateRandColor();
      event.target.style.backgroundColor = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]}`;
      squares.forEach((square) => {
        square.addEventListener("mouseenter", randPen);
        square.addEventListener("click", randPen);
      });
      break;
    case 3:
      event.target.style.backgroundColor = "white";
      squares.forEach((square) => {
        square.addEventListener("mouseenter", whitePen);
        square.addEventListener("click", whitePen);
      });
      break;
  }
}

function released() {
  switch (mode) {
    case 0:
      squares.forEach((square) => {
        square.removeEventListener("mouseenter", blackPen);
        square.removeEventListener("click", blackPen);
      });
      break;
    case 1:
      squares.forEach((square) => {
        square.removeEventListener("mouseenter", colorPen);
        square.removeEventListener("click", colorPen);
      });
      break;
    case 2:
      squares.forEach((square) => {
        square.removeEventListener("mouseenter", randPen);
        square.removeEventListener("click", randPen);
      });
      break;
    case 3:
      squares.forEach((square) => {
        square.removeEventListener("mouseenter", whitePen);
        square.removeEventListener("click", whitePen);
      });
      break;
  }
}

slider.addEventListener("change", () => {
  eraseBoard();
  drawBoard();
});

slider.addEventListener("input", () => {
  sliderLabel.textContent = `Grid Size: ${slider.value} x ${slider.value}`;
  size = slider.value;
});

blackButton.addEventListener("click", () => {
  released();
  mode = 0;
});

colorButton.addEventListener("click", () => {
  released();
  mode = 1;
});

randomButton.addEventListener("click", () => {
  released();
  mode = 2;
});

eraserButton.addEventListener("click", () => {
  mode = 3;
});

clearButton.addEventListener("click", () => {
  eraseBoard();
  drawBoard();
});
