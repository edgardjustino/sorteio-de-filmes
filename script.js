let inputDeAdd = document.getElementById('filmesAdd').value;
let addBtn = document.getElementById('addBtn');
let sorteioBtn = document.getElementById('sortearBtn');
let arrDeFilmes = [];


addBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    let inputDeAdd = document.getElementById('filmesAdd').value;

  arrDeFilmes.push(inputDeAdd);
  console.log(arrDeFilmes)
  document.getElementById('filmesAdd').value = ''

})


function sortear(){

}

function mostrarResultado (){}

//pegar o valor do input
//colocar num array
//sortear array
//mostrar resultados

//botao de apagar