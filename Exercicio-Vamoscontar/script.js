function contar(){
    let inicio = document.getElementById('inicio');
    let fim = document.getElementById('fim');
    let passos = document.getElementById('passos');
    let res = document.querySelector('div#res');
    res.innerHTML = 'Contando:  ';

    if(inicio.value.length == 0 || passos.value.length == 0 || fim.value.length == 0 ){
        window.alert('ERROR Faltam dados');
        res.innerHTML = 'Impossivel Contar!!!';
    }else{
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passos.value);
        
        if (p <= 0) { 
            window.alert('Passo invalido! sera considerado 1');
            p = 1;
        }
        if(i<f){
            //contagem crescente
            for ( i ; i <= f ;i+=p){
                res.innerHTML += ` ${i} \u{1F449}` ;
            }
        
        }else{
            //contagem decrescente
            for ( i ; i >= f ;i-=p){
                    res.innerHTML += ` ${i} \u{1F449}` ;
            }
        }
        res.innerHTML += `\u{1F3C1}` 
            
        
    }
}