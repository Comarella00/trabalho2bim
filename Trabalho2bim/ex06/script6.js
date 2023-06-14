let inputKilos = document.querySelector("#inputKilos");
let btkg = document.querySelector("#btkg");
let h2kg = document.querySelector("#h2kg");

function calcularKg(){
    let kilos = Number(inputKilos.value);

    h2kg.innerHTML = "Quantidade que ir&aacute; pagar pelo prato &eacute;: "+kilos*12 + "reais "
}

btkg.onclick = function(){
    calcularKg();
}