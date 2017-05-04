console.log('Hello world from external scripts');

var numero  = 3;
var numero1 = 1;

console.log(typeof numero);

numero = "Angelo " + numero1;

console.log(numero);

numero = numero + " " + numero1;

console.log(numero);

numero = 6;

numero = 6 + numero1;

console.log(typeof numero);
console.log(numero);

function myFunction(){
	var numero = 0.1+123;
	console.log(numero);
}

myFunction();

// Se tirar o my, a função será do tipo anônima
var myfunction = function my(){      
	var numero = 0.1+123;
	console.log(numero);
}

console.log(typeof myfunction);
myfunction();