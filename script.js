
function carregar() {
    var mensagem = window.document.getElementById("mensagem");
    var foto = window.document.getElementById("foto");
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    mensagem.innerHTML = "Agora são: " + hora + " hroas e " + minutos + " minutos.";
    if (hora >= 6 && hora < 12) {
        //Imagem de manha
        foto.src = "imagens/manha.png";
        document.body.style.background = "#959BBF";

    } else if (hora >= 12 && hora < 18) {
        //Imagem de tarde
        foto.src = "imagens/tarde.png";
        document.body.style.background = "#BF2604";

    } else {
        //Imagem de noite
        foto.src = "imagens/noite.png";
        document.body.style.background = "#2805A6"
    }

}