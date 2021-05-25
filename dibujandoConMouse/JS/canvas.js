var canvas = document.getElementById("dibujito");
var hoja = canvas.getContext("2d");
var rect = canvas.getBoundingClientRect();
var colorElegido = document.getElementById("input-color");
var size = document.getElementById("size");
canvas.width = window.innerWidth - 20;
canvas.height = 330;
hoja.fillStyle = "white";
hoja.fillRect(0, 0, canvas.width, canvas.height);

canvas.addEventListener("mousedown", function (e) {
    x = e.clientX - canvas.offsetLeft;
    y = e.clientY - canvas.offsetTop;
    dibujando = true;
});
canvas.addEventListener("mousemove", function (e) {
    if (dibujando) {
        dibujarLinea(color, x, y, e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop, hoja, grosor);
        x = e.clientX - canvas.offsetLeft;
        y = e.clientY - canvas.offsetTop;
    }
});
canvas.addEventListener("mouseup", function (e) {
    if (dibujando) {
        dibujarLinea(color, x, y, e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop, hoja, grosor)
        x = 0;
        y = 0;
        dibujando = false;
    }
});
colorElegido.addEventListener("input", changeColor);
size.addEventListener("input", changeSize);


let dibujando = false;
let x, y;
let color, grosor;

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo, grosor){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = grosor;
    lienzo.lineCap = "round";
    lienzo.lineJoin = "round";
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function changeColor () {
    color = colorElegido.value;
}
function changeSize () {
    grosor = size.value;
}