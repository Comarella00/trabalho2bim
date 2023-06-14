let inputPao = document.querySelector("#inputPao");
let inputBroa = document.querySelector("#inputBroa");
let btCalcular = document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function calcular(){
    let pao = Number(inputPao.value);
    let broa = Number(inputBroa.value);

    h2Resultado.innerHTML = "valor: "+((pao*0.12)+(broa*1.50))+"<br>"+
    "Valor 10%: "+Math.round(+1/100*((pao*0.12)+(broa*1.50)));
}

btCalcular.onclick = function(){
    calcular();
}