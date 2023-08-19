function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano'); 
    var res = document.querySelector('div#res');
    var section = document.getElementById('section');
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("[ERROR] Verifique os dados e tente novamente");
    }else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        res.innerHTML = `Idade Calculada:  ${idade} anos`;
        var genero ='';
        var img = document.createElement('img');
        img.setAttribute('id','foto');
        if(fsex[0].checked){
            genero = 'Homem';
            section.style.boxShadow = " 0px 0px 10px 5px #2a38f7";
            if(idade>=0 && idade <10){
                //Criança
                img.setAttribute('src','Imagens/Criança-M.jpg');
            }else if(idade<21){
                //Jovem
                img.setAttribute('src','Imagens/Adolecente-M.jpg');
            }else if(idade <50){
                //Adulto
                img.setAttribute('src','Imagens/Adulto-M.jpg');
            }else{
                //Idoso
                img.setAttribute('src','Imagens/Idoso-M.jpg');
            }
        } else if(fsex[1].checked){
            genero = 'Mulher';
            section.style.boxShadow = " 0px 0px 10px 5px #f538d2";
            if(idade>=0 && idade <10){
                //Criança
                img.setAttribute('src','Imagens/Criança-F.jpg');
            }else if(idade<21){
                //Jovem
                img.setAttribute('src','Imagens/Adolecente-F.jpg');
            }else if(idade <50){
                //Adulto
                img.setAttribute('src','Imagens/Adulto-F.jpg');
            }else{
                //Idoso
                img.setAttribute('src','Imagens/Idoso-F.jpg');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos: ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}