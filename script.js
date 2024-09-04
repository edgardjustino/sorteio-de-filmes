let addBtn = document.querySelector('#addBtn');
let sorteioBtn = document.querySelector('#sortearBtn');
let inputText = document.querySelector('#filmesAdd');
let ulOptions = document.querySelector('#lugarDaLista');
let result = document.querySelector('#resultado');
let optionsArray = [];

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let optionName = inputText.value;
  let newOption = document.createElement('li');

  //checar se já escreveu a opção antes
  //  if (optionsArray.includes(optionName)){
  //  result.innerText = 'você já adicionou este'

  if (optionName === '' || optionName.match(/^(\s)+$/)) {
    result.innerText = 'escreva a opção';
  } else {
    newOption.innerHTML =
      `<span class="opcao"><h2 id='opcao'>${optionName}</h2></span>` +
      `<span onclick="deleteOption(this)"><i class="fa-solid fa-trash"></i></span>`;

    ulOptions.appendChild(newOption);

    optionsArray.push(optionName);

    inputText.value = '';
  }

  if (optionName === '' || optionName.match(/^(\s)+$/)) {
    result.innerText = 'escreva a opção';
  } else if (optionsArray.length === 1) {
    result.innerText = 'Coloque mais uma opção';
  } else {
    result.innerText = '';
  }
});

function deleteOption(x) {
  //console.log(li)
  li = x.parentElement;
  optionName = li.querySelector('.opcao');
  //.innerText

  //optionsArray -> remover elemento = innerText do li
  index = optionsArray.indexOf(optionName);
  optionsArray.splice(index, 1);

  li.remove();
}

function sortear() {
  if (optionsArray.length === 0) {
    result.innerText = 'Por favor, coloque uma opção';
  } else if (optionsArray.length === 1) {
    result.innerText = 'Coloque mais uma opção';
  } else {
    let index = Math.floor(Math.random() * optionsArray.length);
    console.log(index);
    result.innerText = optionsArray[index];
  }
}

//  function deleteAll (){
// ulOptions.innerHTML = '';
// optionsArray = [];
// }
