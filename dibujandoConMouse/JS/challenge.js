const principalColor = document.getElementById("principal-color")
const lienzo = document.getElementById("dibujito");
const papel = lienzo.getContext("2d");
const liChallenge = document.getElementById("li-challenge");
const challenge = document.getElementById("challenge");
const iRandom = document.getElementById("iRandom");
const imgChallenge = document.getElementById("challenge--img");
const imgs = ["https://image.freepik.com/vector-gratis/pollo-dibujos-animados_6996-1070.jpg",
    "https://vignette.wikia.nocookie.net/club-penguin-super-fanon/images/1/11/Pizzero_3DS.png/revision/latest?cb=20160920005038&path-prefix=es",
    "https://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png",
    "https://www.graphicpie.com/wp-content/uploads/2020/11/among-us-green-png.png",
    ]

//----Llamada a funciones----
liChallenge.addEventListener("click", displayOn);
lienzo.addEventListener("click", displayOff);
iRandom.addEventListener("click", changeImage);

let intento = new Image();
intento.src = "https://image.freepik.com/vector-gratis/pollo-dibujos-animados_6996-1070.jpg";
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