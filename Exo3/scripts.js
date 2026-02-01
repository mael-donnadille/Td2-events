const target = document.querySelector('h1');

target.addEventListener('click', action);

function action() {
  console.log('click sur le titre');
}
const target2 = document.getElementById('p1');

target2.addEventListener('click', function() {
  console.log('click sur le paragraphe');
});


const target3 = document.getElementById('mask');

target3.addEventListener('click', () => {
  const img = document.getElementById('img2');
  img.style.display = 'none';
});
