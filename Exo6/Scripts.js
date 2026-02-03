//  Transformer un input de type password en type texte à l’aide d’un bouton et rendre le mot de passevisible.

const bouton = document.querySelector('button#afficher');
const motDePasse = document.querySelector('input#password');    
bouton.addEventListener("click", function() {
    if (motDePasse.type === "password") {
        motDePasse.type = "text";
    } else {
        motDePasse.type = "password";
    }
});