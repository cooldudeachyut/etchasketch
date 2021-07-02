let container = document.getElementById("container");

let grid = document.createElement("div");
grid.id = "grid-container";
container.appendChild(grid);

for (let i = 1; i <= 16; i++)
{
	let gridElem = document.createElement("div");
	gridElem.classList.add("grid-element");
	grid.appendChild(gridElem);
}