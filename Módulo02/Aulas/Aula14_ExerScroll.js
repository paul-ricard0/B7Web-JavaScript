function subirTela(){
    window.scrollTo({
        top: 0, 
        left: 0, 
        behavior: 'smooth'}
    );
}

function aparecerButaoScroll(){
    if(window.scrollY==0){
        //ocultar o botão
        document.querySelector('.scrollbutton').style.display = "none";
    }else{
        //mostrar o botão
        document.querySelector('.scrollbutton').style.display = "block";
    }
}

//para ativar a funcao aparecerButaoScroll toda vez que mexer no scroll da janela
window.addEventListener('scroll', aparecerButaoScroll);
