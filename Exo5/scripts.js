const lien = document.getElementById("close");
const soldes = document.getElementById("soldes");

lien.addEventListener("click", function(event) 
{
  event.preventDefault(); 
  soldes.classList.add("hidden");
});
