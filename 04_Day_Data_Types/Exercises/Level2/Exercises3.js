// Obtener el día como entrada del usuario
let dia = prompt("Que dia es hoy?");


dia = dia.toLowerCase();


if (dia ===  "Lunes", "Mares", "Miercoles", "Jueves" , "Viernes" || dia === 'sábado','domingo') {
    console.log(`El ${dia} es fin de semana.`);
} else {
    console.log(`El ${dia} es un día laborable.`);
}
