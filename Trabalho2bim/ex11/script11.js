let salario = document.querySelector("#salario")
let calcular = document.querySelector("#calcular")
let resultado1 = document.querySelector("#resultado1")
let resultado2 = document.querySelector("#resultado2")
let resultado3 = document.querySelector("#resultado3")

function somarSalario()
{
    let salario1 = Number (salario.value)
    resultado1.textContent = "Salario inicial: "+salario1
    resultado2.textContent = "Salario com aumento de 15%: "+((salario1 * 0.15)+salario1)
    resultado3.textContent = "Salario final: "+(salario1 + (salario1 * 0.8-salario1))

}
calcular.onclick = function(){
    somarSalario()
}