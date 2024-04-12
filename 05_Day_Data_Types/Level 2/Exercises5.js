const webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
  ];
  
  const exsiste = "Sass";
  
 
  if (webTechs.includes(exsiste)) {
    console.log("Sass es un preprocesador de CSS.");
  } else {
    
    webTechs.push(exsiste);
    console.log(webTechs);
  }
  