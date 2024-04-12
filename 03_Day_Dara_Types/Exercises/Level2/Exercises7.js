
let firstName = "Asabeneh";
let lastName = "Yetayeh";


if (firstName.length > lastName.length) {

    console.log(`Tu primer nombre, ${firstName}, es más largo que tu apellido, ${lastName}.`);
} else if (firstName.length < lastName.length) {
    
    console.log(`Tu apellido, ${lastName}, es más largo que tu primer nombre, ${firstName}.`);
} else {

    console.log(`Tanto tu nombre, ${firstName}, como tu apellido, ${lastName}, tienen la misma longitud.`);
}
