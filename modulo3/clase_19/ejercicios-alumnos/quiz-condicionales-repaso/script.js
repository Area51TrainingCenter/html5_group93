/* 
  Ejercicio Quiz

  El ejercicio consiste en que debemos crear un pequeño quiz de 5 preguntas que el usuario debe de responder. Si el usuario responde las 5 preguntas correactamente se le mostrará un mensaje que dirá que se ganó la corona de oro, si responde 3 preguntas se le mostrará un mensaje diciendole que ganó la corona de plata y si responde menos de 3 preguntas se le mostrará un mensaje donde perdió.

  Pasos para hacer este ejercicio

    1. Crea una variable que contenga la información de las preguntas correctas que tiene el usuario
    2. Crea los prompt que necesitas para armar tus 5 preguntas y guarda el valor que escriba el usuario en estos prompt en una variable.
    3. Evalua cuales son las preguntas que son correctas. Por cada pregunta correcta la variable que guarda la información de las respuestas correctas debe de aumentar en 1
    4. Evalua cuantas preguntas el usuario respondió correctamente
    5. Imprime los mensajes según la cantidad de respuestas correctas.
*/


var respuestasCorrectas = 0;


var pregunta1 = prompt("pregunta1");
var pregunta2 = prompt("pregunta2");
var pregunta3 = prompt("pregunta3");
var pregunta4 = prompt("pregunta4");
var pregunta5 = prompt("pregunta5");

if(pregunta1 === 'blah'){
	respuestasCorrectas = respuestasCorrectas + 1;
	//respuestas += 1;
}

if(pregunta2 === 'bleh'){
	respuestasCorrectas = respuestasCorrectas + 1;
}

if(pregunta3 === 'blih'){
	respuestasCorrectas = respuestasCorrectas + 1;
}

if(pregunta4 === 'bloh'){
	respuestasCorrectas = respuestasCorrectas + 1;
}

if(pregunta5 === 'bluh'){
	respuestasCorrectas = respuestasCorrectas + 1;
}


if(respuestasCorrectas === 5){
	document.write('Has ganado la corona de oro');
}else if (respuestasCorrectas === 3){
	document.write('Has ganado la corona de plata');
}else if(respuestasCorrectas < 3) {
	document.write("Has perdido");
}