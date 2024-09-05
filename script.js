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

  if (optionName === '' || optionName.match(/^(\s)+$/)) {
    result.innerText = 'por favor, escreva a opção';
  } else if (optionsArray.includes(optionName)) {
    result.innerText = 'você já adicionou esta opção';
  } else {
    newOption.innerHTML =
      `<span class="opcao"><h2 id='opcao'>${optionName}</h2></span>` +
      `<span onclick="deleteOption(this)"><i class="fa-solid fa-trash"></i></span>`;

    ulOptions.appendChild(newOption);

    optionsArray.push(optionName);

    inputText.value = '';

    if (optionsArray.length === 1) {
      result.innerText = 'coloque mais uma opção';
    } else {
      result.innerText = '';
    }
  }
});

function deleteOption(x) {
  //console.log(li)
  li = x.parentElement;
  optionName = li.querySelector('.opcao'); //.innerText

  //optionsArray -> remover elemento = innerText do li
  index = optionsArray.indexOf(optionName);
  optionsArray.splice(index, 1);
  li.remove();
}

function sortear() {
  if (optionsArray.length === 0) {
    result.innerText = 'por favor, coloque uma opção';
  } else if (optionsArray.length === 1) {
    result.innerText = 'coloque mais uma opção';
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

//bugs: qd tem espaço na frente vai mas repete mesmo assim
