function alterar(newtitulo){
    document.getElementById("titulo").innerHTML = newtitulo;

    document.getElementById("campo").value = newtitulo;
}


function somar(x, y){
    let total = x + y;

    document.getElementById("campo").value = total;
}

function subtrair(a, b){
    let result = a - b;

    return result;
}

var resultado = subtrair(15, 4);
console.log(resultado);