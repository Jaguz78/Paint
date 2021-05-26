/*const canvas = document.getElementById("dibujito");
const hoja = canvas.getContext("2d");
const rect = canvas.getBoundingClientRect();
const colorElegido = document.getElementById("input-color");
const size = document.getElementById("size");
canvas.width = window.innerWidth - 10;
canvas.height = window.innerHeight - 220;
hoja.fillStyle = "white";
hoja.fillRect(0, 0, canvas.width, canvas.height);*/

canvas.addEventListener("mousedown", function (e) {
    x = e.clientX - canvas.offsetLeft;
    y = e.clientY - canvas.offsetTop;
    dibujando = true;
});
canvas.addEventListener("mousemove", function (e) {
    if ((dibujando===true) && (e.changedTouches==undefined)) {
        dibujarLinea(color, x, y, e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop, hoja, grosor);
        x = e.clientX - canvas.offsetLeft;
        y = e.clientY - canvas.offsetTop;
    }
});
canvas.addEventListener("mouseup", function (e) {
    if ((dibujando===true) && (e.changedTouches==undefined)) {
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
let color, grosor = size.value;

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
const erased = document.getElementById("erased-input");
erased.addEventListener("input", borrar);

function borrar (){
    if(erased.checked){
        color = "white";
    }
    else{
        color = colorElegido.value;
    }
}

/* Hacer que funcione para celulares */
canvas.addEventListener("touchstart", function (e) {
    if(e.changedTouches != undefined){
    x = e.changedTouches[0].pageX - canvas.offsetLeft;
    y = e.changedTouches[0].pageY - canvas.offsetTop;
    dibujando = true;
    console.log("touchStart");
    }
});
canvas.addEventListener("touchmove", function (e) {
    if (e.changedTouches != undefined) {
        dibujarLinea(color, x, y, e.changedTouches[0].pageX - canvas.offsetLeft, e.changedTouches[0].pageY - canvas.offsetTop, hoja, grosor);
        x = e.changedTouches[0].pageX - canvas.offsetLeft;
        y = e.changedTouches[0].pageY - canvas.offsetTop; 
    }   
});