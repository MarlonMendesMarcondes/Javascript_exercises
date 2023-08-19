function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var section = document.getElementById('section');
    var data = new Date();
    var hora = data.getHours();  
    msg.innerHTML = `Agora sao ${hora} horas.`
    if (hora >=7 && hora < 12){
        //Bom dia!
        img.src = "Imagens/manha.jpg"
        section.style.boxShadow = " 0px 0px 10px 5px #e0a12b"
    }else if (hora >=12 && hora < 18){
        //Boa Tarde!
        img.src = "Imagens/tarde.jpg"
        section.style.boxShadow = " 0px 0px 10px 5px #5b8ac7"
    }else if(hora >=0 && hora < 7){
        //Boa madrugada!
        img.src = "Imagens/madrugada.jpg"
        section.style.boxShadow = " 0px 0px 10px 5px #314269"
    }else{
        //Boa Noite! 
            img.src="Imagens/noite.jpg"
            section.style.boxShadow = " 0px 0px 10px 5px #d894ff"
    }
}
