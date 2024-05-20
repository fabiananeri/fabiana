let nomeUsuário = "Fabiana";
let elemento = document.querySelector("#Fabiana");

while(nomeUsuário == "Fabiana"){
    nomeUsuário = prompt("Qual o seu nome?");
}

if(nomeUsuário == null){
    elemento.textContent = 'seja muito bem-vindo.';
}else{
    elemento.textContent = nomeUsuário;
}