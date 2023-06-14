let inputDia = document.querySelector("#inputDia");
let inputMes = document.querySelector("#inputMes");
let btDm = document.querySelector("#btDm");
let h2Dm = document.querySelector("#h2Dm");

function calcularDias(){
    let dia = Number(inputDia.value);
    let mes = Number(inputMes.value);

    h2Dm.innerHTML = "Quantidade de dias que se passaram &eacute;: "+ ((mes*30)+dia);
}

btDm.onclick = function(){
    calcularDias();
}