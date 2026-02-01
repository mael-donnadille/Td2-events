
  function conversion(valeur) {
    return valeur * 1.8 + 32;
  }

  const saisie = prompt("Entre une temperature en degres celsius:");

  const celsius = Number(saisie);

  if (isNaN(celsius)) {
    console.log("Erreur: Veuillez entrer un nombre valide.");
  } else {  
    const fahrenheit = conversion(celsius);
    console.log(celsius + " °C = " + fahrenheit + " °F");
  }
