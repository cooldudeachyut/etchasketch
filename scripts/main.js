let grid = document.getElementById("grid-container");

let side = 10;
let color = "rgb(0,0,0)";
let rainbow_flag = 0;

function randomColor(){
	let indicator = Math.floor(Math.random() * 7);

	if (indicator === 0)
		return "#ff0000";
	if (indicator === 1)
		return "#ffa500";
	if (indicator === 2)
		return "#ffff00";
	if (indicator === 3)
		return "#008000";
	if (indicator === 4)
		return "#0000ff";
	if (indicator === 5)
		return "#4b0082";
	if (indicator === 6)
		return "#ee82ee";
}

let changeToErase = (event) => {
	rainbow_flag = 0;
	color = "rgb(255,255,255)";
}

let changeToBlack = (event) => {
	rainbow_flag = 0;
	color = "rgb(0,0,0)";
}

let changeToRainbow = (event) => rainbow_flag = 1;

let changeColor = (event) => {
	if (rainbow_flag === 0)
		event.target.setAttribute("style", "background-color:"+color+";");
	else
		{
			event.target.setAttribute("style", "background-color:"+randomColor()+";");
		}
}

function gridFill() {
	grid.setAttribute("style", "grid-template-columns:repeat(auto-fit, " + side + "px); grid-template-rows:repeat(auto-fit, " + side + "px);");
	let sheet = document.createElement('style')
	sheet.id = "grid-config";
	sheet.innerHTML = ".grid-element{ box-sizing:border-box; background-color:rgb(255, 255, 255); width:"+side+"px; height:"+side+"px;}";
	document.body.appendChild(sheet);

	for (let i = 1; i <= Math.pow(Math.floor(600/side),2); i++)
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
