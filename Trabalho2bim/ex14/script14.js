let inputTotal = document.querySelector("#inputTotal");
let btCalcular = document.querySelector("#btCalcular");
let h2dividir = document.querySelector("#h2dividir");

function calcularDivisao(){
    let total =  Number(inputTotal.value);

    let valorCarlosAndre = Math.floor(total / 3);
    let valorFelipe = (total - (valorCarlosAndre *2)).toFixed(2);

    h2dividir.innerHTML = 
    "Carlos e Andr&eacute; devem pagar: R$ "+ valorCarlosAndre+ "<br>"+
    "Felipe deve pagar: R$ "+ valorFelipe;
}

btCalcular.onclick = function(){
    calcularDivisao();
}