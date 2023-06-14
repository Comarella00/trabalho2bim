let inputNome = document.querySelector("#inputNome");
let inputIdade = document.querySelector("#inputIdade");
let btVidas = document.querySelector("#btVidas");
let h2r = document.querySelector("#h2r");

function calcularDias(){
    let nome = String(inputNome.value);
    let idade = Number(inputIdade.value);

    h2r.innerHTML = nome + " ,VOCE JA VIVEU " + (idade*365)+" DIAS ";
}

btVidas.onclick = function(){
    calcularDias()
}