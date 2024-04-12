// Declaraciones que proporcionan un valor falso
console.log(2 < 1); 
console.log('apple' === 'orange'); 
console.log(20 !== 20); 

// Objetos Date
let today = new Date();
let currentYear = today.getFullYear();
let currentMonth = today.getMonth() + 1; 
let currentDate = today.getDate();
let currentDay = today.getDay(); 
let currentHour = today.getHours();
let currentMinutes = today.getMinutes();
let currentSeconds = today.getTime() / 1000; 

console.log(today);
console.log(currentYear);
console.log(currentMonth);
console.log(currentDate);
console.log(currentDay);
console.log(currentHour);
console.log(currentMinutes);
console.log(currentSeconds);
