var hora = 12;

if(hora < 12){
    console.log("Bom dia");
}
else if(hora < 18){
    console.log("Boa tarde");
}
else{
    console.log("Boa noite");
}

if(hora >= 12 && hora < 18){
    console.log("Ainda é tarde, aproveite!!");
}

if(hora == 12 || hora == 18){
    console.log("Hora do rush");
}