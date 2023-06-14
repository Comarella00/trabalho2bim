let dias = document.querySelector("#dias")
let converter = document.querySelector("#converter")
let resultado1 = document.querySelector("#resultado1")
let resultado2 = document.querySelector("#resultado2")
let resultado3 = document.querySelector("#resultado3")

function converterHoras(){
   let tempo = Number (dias.value)
    resultado1.textContent = Math.round(tempo / 365)
    resultado2.textContent = Math.round(tempo  / 365.25)
    resultado3.textContent = Math.round(tempo / 30.437)
}
converter.onclick = function(){
    converterHoras()
}