// Obtener el mes como entrada del usuario
let mes = prompt("Ingrese un mes:");

mes = mes.toLowerCase();

let temporada;

switch (mes) {
    case 'septiembre':
    case 'octubre':
    case 'noviembre':
        temporada = 'Otoño';
        break;
    case 'diciembre':
    case 'enero':
    case 'febrero':
        temporada = 'Invierno';
        break;
    case 'marzo':
    case 'abril':
    case 'mayo':
        temporada = 'Primavera';
        break;
    case 'junio':
    case 'julio':
    case 'agosto':
        temporada = 'Verano';
        break;
    default:
        temporada = 'Mes inválido';
}

console.log(`La temporada ${mes} es: ${temporada}`);
