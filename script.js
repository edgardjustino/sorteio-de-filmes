let addBtn = document.getElementById('addBtn');
let sorteioBtn = document.getElementById('sortearBtn');
let inputDeAdd = document.getElementById('filmesAdd').value;
let arrDeFilmes = [];

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let inputDeAdd = document.getElementById('filmesAdd').value;

  //show on the screen
  let li = document.createElement('li');
  li.innerHTML = inputDeAdd + '<span onclick="deleteOption(this)">x</span>';

  document.querySelector('ul').appendChild(li);

  document.getElementById('filmesAdd').value = '';

  arrDeFilmes.push(inputDeAdd);
  console.log(arrDeFilmes);
});

function deleteOption(li) {
  //console.log(li)
  li.parentElement.remove();
}

// function sortear (){
//   //show result on the screen
// }

function sortearElementoDoArr(min, max) {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let result = Math.floor(step2) + min;
  return result;
}

function sortear() {
  let index = sortearElementoDoArr(0, arrDeFilmes.length - 1);
  result.innerText = arrDeFilmes[index];
}

// sorteioBtn.addEventListener('click', (e)=>{
//   e.preventDefault();
//   let inputDeAdd = document.getElementById('filmesAdd').value;
//   let arrDeFilmes = [];

//   arrDeFilmes.push(inputDeAdd);
//   console.log(arrDeFilmes);

// })

//arrDeFilmes.push(inputDeAdd);
//console.log(arrDeFilmes);

//pegar o valor do input
//colocar num array
//sortear array
//mostrar resultados

//botao de apagar
