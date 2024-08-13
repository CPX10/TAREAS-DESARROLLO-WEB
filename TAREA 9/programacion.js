function mostrarAlerta() {
	console.log('Ha entrado a la funcion mostrar alerta');
	alert('Hola desde javascript!!');
	//Se limita al bloque donde se crea
	let y = 90;
	console.log(x);
	console.log(y);
}
console.log('probando consola');

let x = 10;
//aqui su alcance es global
//console.log(x);
//console.log(y);

//constante
const Pi = 3.14;
console.log(Pi);

//Pi = 3.14159;

//ejemplo co un objeto
const persona = {
	nombre: 'Paola',
	licencia: true,
};

console.log(persona.nombre);
console.log(persona.licencia);

persona.licencia = false;

console.log(persona.nombre);
console.log(persona.licencia);

let estatus = true;

let temporal = null;

console.log(temporal);

//sin definir
let sinDeclarar;
console.log(sinDeclarar);

//Arreglos
let numeros = [1, 2, 3, 4, 5];

let palabras = ['ave', 'color azul', 'laptop'];
console.log(palabras[2]);

function cambiarEncabezado() {
	let encabezado = document.getElementById('tituloPrincipal');

	encabezado.textContent = 'Modificado por javascript';
}

function cambiarColorFondo() {
	let cuerpo = document.getElementById('cuerpoSitio');

	//let color = '#FF3050';
	let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
	console.log(color);
	cuerpo.style.backgroundColor = color;
}
