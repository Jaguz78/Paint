var principalColor = document.getElementById("principal-color")
var lienzo = document.getElementById("dibujito");
var liChallenge = document.getElementById("li-challenge");
var challenge = document.getElementById("challenge");

//----Funciones----
liChallenge.addEventListener("click", displayOn);
lienzo.addEventListener("click", displayOff);

function displayOn(){
    challenge.classList.remove("hidden");
}
function displayOff(){
    challenge.classList.add('hidden')
}