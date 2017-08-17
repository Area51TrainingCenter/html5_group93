// Arreglos

var persona1 = "Lea";
var persona2 = "Gabriel";
var persona3 = "Raymi";

var personas = ['Lea', 'Gabriel', 'Raymi', 34];

var listaDatos = ['Elder', 'Susana', personas];
console.log(listaDatos);

var arr = ["Nombre", 67, 1200];

// Imprimiento valores segun su posicion

console.log(personas);
console.log(personas[1]);
console.log(listaDatos[2][2]);

// Metodos y Propiedades

var cadena = "Esta es una cadena de texto"
var numeros = [34, 45, 67];

console.log("Cantidad total de caracteres " + cadena.length); 
console.log("Cantidad total de valores en el arreglo " + personas.length);
console.log("Arreglo unido por -", numeros.join("-"));
//console.log("Ultimo elemento borrado", numeros.pop());
console.log("Agregando un nuevo elemento", numeros.push(2017));
console.log(numeros);
console.log("Posicion del elemento con valor 45", numeros.indexOf(45))
console.log('Al reves', numeros.reverse());
console.log('Concatenando ', numeros.concat(34, 'Lea'));
console.log('Concatenando parte 2', numeros.concat(listaDatos));

// Usando arreglos con los gatitos

// document.getElementsByClassName te da algo parecido a un arreglo pero en verdad es mentiraH

var gatitos = document.getElementsByClassName('imagenes'); // .imagenes en css 
console.log("Estos son los gatitos", gatitos);
var nuevosGatitos = Array.from(gatitos); // Para convertir un elemento en un arreglo
console.log(nuevosGatitos.push(10));
console.log(nuevosGatitos);