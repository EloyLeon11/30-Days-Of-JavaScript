
let puntaje = prompt("Ingrese el puntaje del estudiante:");

puntaje = parseInt(puntaje);


let calificacion;

if (puntaje >= 80 && puntaje <= 100) {
    calificacion = 'A';
} else if (puntaje >= 70 && puntaje <= 79) {
    calificacion = 'B';
} else if (puntaje >= 60 && puntaje <= 69) {
    calificacion = 'C';
} else if (puntaje >= 50 && puntaje <= 59) {
    calificacion = 'D';
} else if (puntaje >= 0 && puntaje <= 49) {
    calificacion = 'F';
} else {
    calificacion = 'Puntaje inválido';
}


console.log(`La calificación del estudiante es: ${calificacion}`);
