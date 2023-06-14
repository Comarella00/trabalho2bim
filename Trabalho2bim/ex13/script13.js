let area = document.querySelector("#area")
let calcular = document.querySelector("#calcular")
let resultado = document.querySelector("#resultado")
function somar (){
    let raio = Number (area.value)
    resultado.textContent = 3.14 * raio * raio
}
calcular.onclick = function(){
    somar()
}