let x1 = document.querySelector("#x1");
let y1 = document.querySelector("#y1");
let x2 = document.querySelector("#x2");
let y2 = document.querySelector("#y2");
let bt = document.querySelector("#bt");

function calcularDistancia() {
    let x11 = Number(x1.value);
    let y11 = Number(y1.value);
    let x22 = Number(x2.value);
    let y22 = Number(y2.value);

    resultado.innerHTML = "a distancia entre os pontos é: "+
    (x11-x22)+" , "+(y11-y22);
  }

  bt.onclick = function(){
    calcularDistancia();
  }