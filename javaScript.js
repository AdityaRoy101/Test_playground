var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

body.style.background = "linear-gradient(to right,"
+ "rgb(0,213,255)"
+ ", " 
+ "rgb(187,0,255)"
+")";


var button1 = document.getElementsByClassName("randomColor1")[0];
var button2 = document.getElementsByClassName("randomColor2")[0];


var randomColor = function() {
	return Math.floor(Math.random()*16777215).toString(16);
}
var t;
var y;
button1.addEventListener("click", function() {
	var g = randomColor();
	t = "#" + g;
	body.style.background = "linear-gradient(to right,"
	+ t
	+ ", " 
	+ y
	+")";

	css.textContent = body.style.background + ",";
})

button2.addEventListener("click", function() {
	var g = randomColor();
	y = "#" + g;
	body.style.background = "linear-gradient(to left,"
	+ t
	+ ", " 
	+ y 
	+")";

	css.textContent = body.style.background + ",";
})

var putColorToBackground = function () {
	body.style.background = "linear-gradient(to right,"
	+ color1.value 
	+ ", " 
	+ color2.value 
	+")";

	css.textContent = body.style.background + ",";
}

color1.addEventListener("input", putColorToBackground);

color2.addEventListener("input",putColorToBackground);