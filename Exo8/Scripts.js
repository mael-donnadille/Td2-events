document.addEventListener("DOMContentLoaded", function() { 
    const bouton = document.getElementById("Masquer");
    const image = document.getElementById("image");

    bouton.addEventListener("click", function() {
        if (image.style.display === "none") {
            image.style.display = "block";
            bouton.textContent = "Masquer l'image";
        } else {
            image.style.display = "none";
            bouton.textContent = "Afficher l'image";
        }
    });
});