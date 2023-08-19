var c = 1
do{
    console.log(`Passa ${c}`)
    c++
    
}while(c <= 10)

var numero = 10;
var tabuada =''  ;
for (var i = 1; i <=10; i++){
    resultado = numero*i;
    tabuada += numero+ ' x ' + i + ' = ' + resultado + '\n';
}
console.log(tabuada);

var inicio = 1;
var fim = 10;
var passos = 2;
var andar = '';
for (var passos = inicio; passos <= fim; inicio+=passos){
    andar += `${passos} 👉` ;
}
 console.log(andar);
