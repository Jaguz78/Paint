const principalColor = document.getElementById("principal-color")
const lienzo = document.getElementById("dibujito");
const papel = lienzo.getContext("2d");
const liChallenge = document.getElementById("li-challenge");
const challenge = document.getElementById("challenge");
const iRandom = document.getElementById("iRandom")
const imgChallenge = document.getElementById("challenge--img")
const imgs = ["../img/cheems.png", "./img/gatoMotivado.jpg", "../img/satimaOK.jpg", "../img/akatsuki.png", "../img/Pizzero.png",
             "../img/react.jpg", "../img/red.jpg", "../img/obligame-prro.jpg"]

//----Llamada a funciones----
liChallenge.addEventListener("click", displayOn);
lienzo.addEventListener("click", displayOff);
iRandom.addEventListener("click", changeImage);

let intento = new Image();
intento.src = "../img/gatoMotivado.jpg";
intento.width = 10;
intento.height = 10;

/*----Funciones----*/
function displayOn(){
    challenge.classList.remove("hidden");
}
function displayOff(){
    challenge.classList.add('hidden');
}
randomNumber = (max) => Math.floor(Math.random()*max);

function changeImage(){
    imgChallenge.src = "../img/loading.png";
    setTimeout(_ => imgChallenge.src = imgs[Math.floor(randomNumber(imgs.length))], 400)
}