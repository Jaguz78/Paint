var paleta = document.getElementById("paleta");
var licolor = document.getElementById("li__button--color");
var lienzo = document.getElementById("dibujito");
var principalColor = document.getElementById("principal-color")

// ---- Obtener la paleta de Colores ----
var red = document.getElementById("red");
var yellow = document.getElementById("yellow");
var blue = document.getElementById("blue");
var green = document.getElementById("green");
var orange = document.getElementById("orange");
var purple = document.getElementById("purple");
var black = document.getElementById("black");
var white = document.getElementById("white");
var brown = document.getElementById("brown");

//----Funciones----
licolor.addEventListener("click", displayOn);
lienzo.addEventListener("click", displayOff);

function displayOn(){
    paleta.style.display = "block"
}
function displayOff(){
    paleta.style.display = "none"
}