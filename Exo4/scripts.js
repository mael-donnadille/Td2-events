//const cible = document.querySelector('h1#titre');
//cible.addEventListner(clic, 'action');
//function action( ) {
// console.log(event.target);
//}


// correction

const cible = document.querySelector('h1#titre');

cible.addEventListener("click", action);

function action(event) {
  console.log(event.target);
}


//PROBLEME: addEventListner -addEventListener 
//manque guillemets autour de "click" 
// La fonction action doit recevoir l'objet event en paramètre.