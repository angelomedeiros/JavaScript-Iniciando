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

// (function (teste){
// 	console.log('Nome =>', teste);
// })("Angelo Medeiros");
// 
// var teste1 = prompt('Qual o seu nome?');

// function meu_nome(nome){
// 	return nome + " Medeiros Móbrega";
// };

//OBS>:Se a função for declarada em uma variavel ela só pode ser chamada depois.
// console.log(meu_nome(teste1));
// 
// console.log(typeof getArea);
//
// console.log(getArea(3,4));
//
// area1 = getArea(5,6);
//
// console.log(area1);
//
// function getArea(largura,altura){
// 	return largura*altura;
// }

//Função anônima
// (function getArea(largura,altura){
// 	console.log(largura*altura);
// }(7,9))


// var prop1 = prompt('Qual o moodelo?');
// var prop2 = prompt('Qual a cor?');
// var prop3 = prompt('Qual o tipo?');

//  Literal Notation
//  var obejeto = {
// 	modelo:prop1,
// 	cor:prop2,
// 	color:prop3,
// };


//Literal Notation
// var objeto = {};
// objeto.modelo = prop1;
// objeto.cor    = prop2;
// objeto.tipo   = prop3;

// // Deleta a propriedade cor.
// delete objeto.cor;
// test0 = JSON.stringify(objeto);
// console.log(test0);
// console.log(objeto);

var click_me = document.getElementById('click_me');
var formulario = document.getElementsByClassName('number_val_input')[1];
var botao_gerar = document.getElementById('gerar_btn');
var var2 = document.getElementsByTagName('body')[0];

var criar_select = document.createElement('select');
var2.appendChild(criar_select);

for (i=1;i<10;i++){
	var opcao = document.createElement('option');
	opcao.value = i;
	opcao.innerHTML = i;
	criar_select.appendChild(opcao);
}

botao_gerar.addEventListener('click',generate);

function generate(){
	var valor = formulario.value;

	for (var i = 0; i <  parseInt(valor); i++){
		var frml = document.createElement('div');
		frml.id  = "btn_" + i;
		frml.innerHTML = "É burrão!";

		var var1 = document.getElementById('aqui');
		var1.appendChild(frml);
	}	
}

click_me.addEventListener('click', fnClickMe)

function fnClickMe(){
	alert('You clicked me')
}

function validateNumber(){
	var number = document.getElementById("number_val").value;

	if (isNaN(number) || (number >= 1 && number <= 10)){
		alert('Input is not valid');
	} else {
		alert('Input is valid');
	}
}

function over(obj){
	obj.innerHTML = "É burrão!";
}
