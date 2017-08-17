/* 
  Ejercicio Quiz

  El ejercicio consiste en que debemos crear un pequeño quiz de 5 preguntas que el usuario debe de responder. Si el usuario responde las 5 preguntas correactamente se le mostrará un mensaje que dirá que se ganó la corona de oro, si responde 3 preguntas se le mostrará un mensaje diciendole que ganó la corona de plata y si responde menos de 3 preguntas se le mostrará un mensaje donde perdió.

  Utiliza arreglos para hacer este ejercicio. Pista: los arreglos que crees tienen que ver con las preguntas y sus respectivas respuestas.
*/


var respuestasCorrectas = 0;

var qa = [
  ['Pregunta 1', 'Respuesta 1'],
  ['Pregunta 2', 'Respuesta 2'],
  ['Pregunta 3', 'Respuesta 3'],
  ['Pregunta 4', 'Respuesta 4'],
  ['Pregunta 5', 'Respuesta 5']
]

 var respuesta1 = prompt(qa[0][0]);
 var respuesta2 = prompt(qa[1][0]);
 var respuesta3 = prompt(qa[2][0]);
 var respuesta4 = prompt(qa[3][0]);
 var respuesta5 = prompt(qa[4][0]);

if(respuesta1 === qa[0][1]) {
  respuestasCorrectas = respuestasCorrectas + 1;
}
if(respuesta2 === qa[1][1]) {
  respuestasCorrectas = respuestasCorrectas + 1;
}
if(respuesta3 === qa[2][1]) {
  respuestasCorrectas = respuestasCorrectas + 1;
}
if(respuesta4 === qa[3][1]) {
  respuestasCorrectas = respuestasCorrectas + 1;
}
if(respuesta5 === qa[4][1]) {
  respuestasCorrectas = respuestasCorrectas + 1;
}

if(respuestasCorrectas === 5){
  document.write('Has ganado la corona de oro!');
}else if(respuestasCorrectas === 3) {
  document.write('Has ganado la corona de plata');
}else if(respuestasCorrectas < 3){
  document.write('Perdiste :(');
}
