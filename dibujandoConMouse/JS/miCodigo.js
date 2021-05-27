// getElements
const canvas = document.getElementById("dibujito");
const contexto = canvas.getContext("2d");
const size = document.getElementById("size");
const colorElegido = document.getElementById("input-color");
const erased = document.getElementById("erased-input");

//Tamaño del canvas
canvas.width = window.innerWidth - 10;
canvas.height = window.innerHeight - 200;

//color del canvas
contexto.fillStyle = "white";
contexto.fillRect = 0, 0, canvas.width, canvas.height;

//Variables
let x, y, color = "black", grosor = 8, newX, newY, dibujando = false;

// Color y Grosor
size.addEventListener("input", _ => grosor = size.value)
colorElegido.addEventListener("input", _ => color = colorElegido.value);

//Eventos
canvas.addEventListener("mousedown", e =>{
    if(e.changedTouches == undefined){
        x = e.clientX - canvas.offsetLeft;
        y = e.clientY - canvas.offsetTop;
        dibujando = true;
    }
})
canvas.addEventListener("mousemove", e =>{
    if(dibujando && e.changedTouches == undefined){
        newX = e.clientX - canvas.offsetLeft;
        newY = e.clientY - canvas.offsetTop;
        dibujar(color, grosor, contexto, x, y, newX, newY);
        x = newX;
        y = newY;
    }
})
canvas.addEventListener("mouseup", _ =>{
    dibujar(color, grosor, contexto, x, y, newX, newY)
    x = 0;
    y = 0;
    dibujando = false;
})

//Función para dibujar
function dibujar(color, size, lienzo, xinicial, yinicial, xfinal, yfinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = size;
    lienzo.lineJoin = lienzo.lineCap = "round";
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

// Touch
canvas.addEventListener("touchstart", e =>{
    x = e.changedTouches[0].pageX - canvas.offsetLeft;
    y = e.changedTouches[0].pageY - canvas.offsetTop;
    dibujando = true;
})
canvas.addEventListener("touchmove", e => {
    e.preventDefault();
    if(dibujando){
        newX = e.changedTouches[0].pageX - canvas.offsetLeft;
        newY = e.changedTouches[0].pageY - canvas.offsetTop;
        dibujar(color, grosor, contexto, x, y, newX, newY);
        x = newX;
        y = newY;
    }
})
// Borrador
erased.addEventListener("input", _ => {
    erased.checked ? color = "white" : color = colorElegido.value;
})