const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}

if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
}

const allergy = 'Honey';
if (shoppingCart.includes(allergy)) {
    const index = shoppingCart.indexOf(allergy);
    shoppingCart.splice(index, 1);
}

for (let i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i] === 'Tea') {
        shoppingCart[i] = 'Green Tea';
        break; 
    }
}

console.log(shoppingCart);
