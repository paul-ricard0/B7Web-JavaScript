function trocar() {
    if(document.querySelector('#mudarCor').classList.contains('preto')){
        document.querySelector('#mudarCor').classList.remove('preto');
        document.querySelector('#mudarCor').classList.add('verde');
    }else{
        document.querySelector('#mudarCor').classList.remove('verde');
        document.querySelector('#mudarCor').classList.add('preto');
    }
}