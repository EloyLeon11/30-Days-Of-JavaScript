let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";


let cleanText = text.replace(/[.,;]/g, "");


let words = cleanText.split(" ");


let wordCount = words.length;

console.log(words);
console.log("Número de palabras:", wordCount);
