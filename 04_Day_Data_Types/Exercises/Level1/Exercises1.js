

let age = prompt("Enter your age:");

age = parseInt(age);


if(age >= 18){
    alert("are you old enough to drive")
} else{
    let yearToDrive = age - 18;
    alert(`You need ${yearToDrive} for start driving`)
}


