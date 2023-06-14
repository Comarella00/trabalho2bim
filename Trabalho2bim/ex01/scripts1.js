let inputComprimento = document.querySelector("#inputComprimento");
let inputAltura = document.querySelector("#inputAltura");
let btCalcular = document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function calcularArea(){
    let comprimento = Number(inputComprimento.value);
    let altura = Number(inputAltura.value);

    h2Resultado.innerHTML = "A Área do seu Terreno é: "+comprimento*altura;
}

btCalcular.onclick = function(){
    calcularArea();
}