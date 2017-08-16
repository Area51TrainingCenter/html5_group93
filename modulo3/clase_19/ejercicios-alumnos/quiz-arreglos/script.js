/* 
  Ejercicio Quiz

  El ejercicio consiste en que debemos crear un pequeño quiz de 5 preguntas que el usuario debe de responder. Si el usuario responde las 5 preguntas correactamente se le mostrará un mensaje que dirá que se ganó la corona de oro, si responde 3 preguntas se le mostrará un mensaje diciendole que ganó la corona de plata y si responde menos de 3 preguntas se le mostrará un mensaje donde perdió.

  Utiliza arreglos para hacer este ejercicio. Pista: los arreglos que crees tienen que ver con las preguntas y sus respectivas respuestas.
*/


var respuestasCorrectas = 0;

 var respuesta1 = prompt('pregunta 1');
 var respuesta2 = prompt('pregunta 2');
 var respuesta3 = prompt('pregunta 3');
 var respuesta4 = prompt('pregunta 4');
 var respuesta5 = prompt('pregunta 5');

if(respuesta1 === 'blah') {
  respuestasCorrectas = respuestasCorrectas + 1;
}
if(respuesta2 === 'bleh') {
  respuestasCorrectas = respuestasCorrectas + 1;
}
if(respuesta3 === 'blih') {
  respuestasCorrectas = respuestasCorrectas + 1;
}
if(respuesta4 === 'bloh') {
  respuestasCorrectas = respuestasCorrectas + 1;
}
if(respuesta5 === 'bluh') {
  respuestasCorrectas = respuestasCorrectas + 1;
}

if(respuestasCorrectas === 5){
  document.write('Has ganado la corona de oro!');
}else if(respuestasCorrectas === 3) {
  document.write('Has ganado la corona de plata');
}else if(respuestasCorrectas < 3){
  document.write('Perdiste :(');
}