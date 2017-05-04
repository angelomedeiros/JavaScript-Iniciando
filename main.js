console.log('Hello world from external scripts');

// var idade = prompt('Qual sua idade?');

// var idadep = parseInt(idade);

// if (idadep >= 18){
// 		console.log('Você foi autorizado');
// } else{
// 	console.log('Você não tem idade mínima para acessar essa página');
// }

// switch(true){
// 	case (idadep >=18):
// 		console.log('Você foi autorizado');
// 	break;
// 	case (idadep < 18):
// 		console.log('Você não tem idade mínima para acessar essa página');
// 	break;
// 	default:
// 		console.log('Dado inválido');
// 	break;
// }

// var numero  = 3;
// var numero1 = 1;

// console.log(typeof numero);

// numero = "Angelo " + numero1;

// console.log(numero);

// numero = numero + " " + numero1;

// console.log(numero);

// numero = 6;

// numero = 6 + numero1;

// console.log(typeof numero);
// console.log(numero);

// function myFunction(){
// 	var numero = 0.1+123;
// 	console.log(numero);
// }

// myFunction();

// // Se tirar o my, a função será do tipo anônima
// var myfunction = function my(){      
// 	var numero = 0.1+123;
// 	console.log(numero);
// }

// console.log(typeof myfunction);
// myfunction();
// 
// var i=0;

// while (i<10){
// 	console.log(i);
// 	i++;
// }
// 
// for (var a = 0; a < 10; a++) {
// 	console.log(a);
// }

// [0,1,2,3,4,5,6].forEach(
// 	function(value,key){
// 		// console.log(value);
// 		console.log(value,key);
// 	}
// )
// 
// function funcao(name){
// 	console.log('Nome =>', name);
// };

// funcao("Angelo");

(function (teste){
	console.log('Nome =>', teste);
})("Angelo Medeiros");

