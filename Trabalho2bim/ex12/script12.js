let numero = document.querySelector("#numero");
let calcular = document.querySelector("#calcular");
let resultado1 = document.querySelector("#resultado1");
let resultado2 = document.querySelector("#resultado2");
let resultado3 = document.querySelector("#resultado3");

function separarDigitos() {
  let numero1 = Number(numero.value);
  let centena = Math.floor(numero1 / 100);
  let dezena = Math.floor((numero1 % 100) / 10);
  let unidade = numero1 % 10;

  resultado1.textContent = `CENTENA = ${centena}`;
  resultado2.textContent = `DEZENA = ${dezena}`;
  resultado3.textContent = `UNIDADE = ${unidade}`;
}

calcular.onclick = function(){
    separarDigitos()
}