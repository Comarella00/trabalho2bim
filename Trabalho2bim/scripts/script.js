let qtCavalos = document.querySelector("#qtCavalos");
let btCalcular = document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function calcularFerraduras(){
    let vlr = Number(qtCavalos.value);

    h2Resultado.innerHTML = "Quantidade de ferraduras que dever&aacute; comprar &eacute;: "+vlr*4;
}

btCalcular.onclick = function(){
    calcularFerraduras();
}
