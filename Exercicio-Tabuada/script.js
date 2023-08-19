function verificar(){
    var n = document.getElementById('txt');
    var numero = Number(n.value);
    var res = document.querySelector('div#res');
    var tabuada = '';
    if(n.value.length == 0){
        window.alert('ERROR: Digite um numer');
    }else{
    for (var i = 1; i <=10; i++){
        resultado = numero*i;
        tabuada += `${numero} x ${i} = ${resultado}`+'<br>';
    }
    res.innerHTML = tabuada;
}
}