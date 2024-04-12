const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya",
  ];
  
  const countriesETH = "Ethiopia";
  

  if (countries.includes(countriesETH)) {
    console.log("ETHIOPIA");
  } else {
  
    countries.push(countriesETH);
  }
  
  console.log(countries);
  