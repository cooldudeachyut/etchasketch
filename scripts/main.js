let container = document.getElementById("container");

let grid = document.createElement("div");
grid.id = "grid-container";
container.appendChild(grid);

let changeColor = (event) => {
	event.target.setAttribute("style", "background-color:rgb(0, 0, 0);");
}

let changeColorBack = (event) => {
	event.target.setAttribute("style", "background-color:rgb(255, 255, 255);");
}

for (let i = 1; i <= 6400; i++)
{
	let gridElem = document.createElement("div");
	gridElem.classList.add("grid-element");
	gridElem.addEventListener("mouseover", changeColor);
	grid.appendChild(gridElem);
}