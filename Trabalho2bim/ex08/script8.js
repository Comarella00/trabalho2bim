let pequenas = document.querySelector("#pequenas")
let medias = document.querySelector("#medias")
let grandes = document.querySelector("#grandes")
let resultado = document.querySelector("#resultado")
let calcular = document.querySelector("#calcular")

function somar (){
    let pequena = Number (pequenas.value)
    let media = Number (medias.value)
    let grande = Number (grandes.value)
    resultado.textContent = (pequena * 10) + (media * 12 ) + (grande * 15);
}
calcular.onclick = function(){
    somar()
}
