function isValid(chaine) 
{
  return chaine.includes("@");
}

const email = prompt("Entre ton adresse mail :");
const resultat = isValid(email);

if (resultat === true) 
{
  console.log("Adresse mail valide");
} 
else 
{
  console.log("Adresse mail invalide");
}
