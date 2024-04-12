
let ladoA = prompt("Ingrese el lado a del triángulo:");


let ladoB = prompt("Ingrese el lado b del triángulo:");


let ladoC = prompt("Ingrese el lado c del triángulo:");


ladoA = parseFloat(ladoA);
ladoB = parseFloat(ladoB);
ladoC = parseFloat(ladoC);


let perimetro = ladoA + ladoB + ladoC;


alert("El perímetro del triángulo es: " + perimetro);
