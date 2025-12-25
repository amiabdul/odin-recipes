const newDiv = document.querySelector(".container");
console.log(newDiv);
const gridRow = document.querySelector("#row");
const gridCol = document.querySelector("#col");
const btn = document.querySelector("#createGrid");

const makeAGrid = function () {
  newDiv.innerHTML = "";
  let rightSide = Number(gridCol.value);
  let topSide = Number(gridRow.value);
  let totalSide = topSide * rightSide;
  for (let i = 0; i < totalSide; i++) {
    const grid = document.createElement("div");
    grid.className = "grids";

    grid.style.width = `calc(100% / ${rightSide})`;
    console.log((grid.style.width = `calc(100% / ${rightSide})`));

    grid.style.height = `calc(100% / ${topSide})`;
    newDiv.appendChild(grid);
  }
  console.log(totalSide);
};
newDiv.addEventListener("mouseover", function (e) {
  // console.log(e, "hover");
  if (e.target.classList.contains("grids")) {
    e.target.style.backgroundColor = "black";
  }
});
// makeAGrid(2, 4);
btn.addEventListener("click", makeAGrid);
