function trocarImagem(arquivo, nomePersonagem){
    document.querySelector('.imagem').setAttribute('src', 'imagens/' +arquivo);
    document.querySelector('.imagem').setAttribute('nomePersonagem', nomePersonagem);
}

function getnomePersonagem(){
    let nome = document.querySelector('.imagem').getAttribute('nomePersonagem');

    alert("O personagem é o "+nome);

}