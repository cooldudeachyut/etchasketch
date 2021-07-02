let grid = document.getElementById("grid-container");

let side = 10;
let color = "rgb(0,0,0)";

let changeToErase = (event) => color = "rgb(255,255,255)";

let changeToBlack = (event) => color = "rgb(0,0,0)";

let changeToRainbow = (event) => color = "rgb(236,74,59)";

let changeColor = (event) => {
	event.target.setAttribute("style", "background-color:"+color+";");
}

function gridFill() {
	grid.setAttribute("style", "grid-template-columns:repeat(auto-fit, " + side + "px); grid-template-rows:repeat(auto-fit, " + side + "px);");
	let sheet = document.createElement('style')
	sheet.id = "grid-config";
	sheet.innerHTML = ".grid-element{ box-sizing:border-box; background-color:rgb(255, 255, 255); width:"+side+"px; height:"+side+"px;}";
	document.body.appendChild(sheet);

	for (let i = 1; i <= Math.pow(600/side,2); i++)
	{
		let gridElem = document.createElement("div");
		gridElem.classList.add("grid-element");
		gridElem.addEventListener("mouseover", changeColor);
		grid.appendChild(gridElem);
	}
}

function gridDelete() {
	while (grid.firstChild) 
		grid.removeChild(grid.firstChild);
}

function clearAll() {
	gridDelete();
	document.body.removeChild(document.getElementById("grid-config"));
	gridFill();
}

function changePixels(){
	let newSide = Number(prompt("Enter new pixel size (5 - 60)"));
	if (newSide <= 60 && newSide >= 5)
	{
		side = newSide;
		clearAll();
	}
}

let erase = document.getElementById("erase").addEventListener("click", changeToErase);
let clear = document.getElementById("clear").addEventListener("click", clearAll);
let black = document.getElementById("black").addEventListener("click", changeToBlack);
let rainbow = document.getElementById("rainbow").addEventListener("click", changeToRainbow);
let pixels = document.getElementById("pixels").addEventListener("click", changePixels);
gridFill();
