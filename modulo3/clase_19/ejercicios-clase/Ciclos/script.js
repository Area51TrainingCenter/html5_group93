// Estructuras Repetitivas = Ciclos = Loops = Bucles
/*
var random = Math.floor(Math.random() * 70) + 1
document.write(random + '-');

var random = Math.floor(Math.random() * 10) + 1
document.write(random + '-');
*/


// Ciclos parte 1

/*
contador = 0;

while(contador < 100){
	var random = Math.floor(Math.random() * 7) + 1
	document.write('<div class="colores">' + random + '</div>');
	//contador++
	contador = contador + 1
}
*/

// Ciclos parte 2
/*
for(var contador1 = 0; contador1 < 50; contador1++){
	var random = Math.floor(Math.random() * 7) + 1
	document.write('<div class="colores">' + random + '</div>');
}
*/

// Ciclos usando la web

/*
var gatitos = document.querySelectorAll('img');
for(var i=0; i< gatitos.length; i++){
	document.write("Este es el gatito" + i);
}
*/

// Mejorando el ejercicio del quiz

var respuestasCorrectas = 0;

var qa = [
  ['Pregunta 1', 'Respuesta 1'],
  ['Pregunta 2', 'Respuesta 2'],
  ['Pregunta 3', 'Respuesta 3'],
  ['Pregunta 4', 'Respuesta 4'],
  ['Pregunta 5', 'Respuesta 5']
]

for(var i=0; i<qa.length; i++){
	var pregunta = qa[i][0]; 
	var respuesta = qa[i][1];
	var usuarioRespuesta = prompt(pregunta);

	if(usuarioRespuesta == respuesta){
		respuestasCorrectas++;
	}
}

if(respuestasCorrectas === 5){
  document.write('Has ganado la corona de oro!');
}else if(respuestasCorrectas === 3) {
  document.write('Has ganado la corona de plata');
}else if(respuestasCorrectas < 3){
  document.write('Perdiste :(');
}
