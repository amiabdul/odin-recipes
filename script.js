const newDiv = document.querySelector(".container");
console.log(newDiv);

for (let i = 0; i < 16; i++) {
  const grids = document.createElement("div");
  grids.className = "grids";
  newDiv.appendChild(grids);
}
