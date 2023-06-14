let inputValor = document.querySelector("#inputValor");
let btgaso = document.querySelector("#btgaso");
let h2ga = document.querySelector("#h2ga");

function calcularGa(){
    let valor = Number(inputValor.value);

    h2ga.innerHTML = "Quantidade de litros &eacute;: "+valor/5.21+"<br> Valor do litro &eacute;: 5.21";
}

btgaso.onclick = function(){
    calcularGa()
}