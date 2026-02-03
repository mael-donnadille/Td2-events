//dark mode

const bouttonJour = document.getElementById("Jour");
const bouttonNuit = document.getElementById("Nuit");

bouttonNuit.addEventListener ('click', black);

function black (b)
{
    console.log('test1')
    document.querySelector("body").classList.add("nuit")
}

bouttonJour.addEventListener ('click', whithe);

function whithe (w)
{
    console.log('test2')
    document.querySelector("body").classList.remove("nuit")
}