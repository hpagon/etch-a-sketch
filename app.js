const container = document.querySelector("#container");
let size = 16;
let numSquare = size ** 2;

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
