let addBtn = document.querySelector('#addBtn');
let sorteioBtn = document.querySelector('#sortearBtn');
let inputText = document.querySelector('#filmesAdd');
let ulOptions = document.querySelector('#lugarDaLista');
let result = document.querySelector('#resultado');
let optionsArray = [];

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let optionName = inputText.value;

  //show on the screen
  let newOption = document.createElement('li');
  newOption.innerHTML = `<span class="opcao">${optionName}</span>` + `<span onclick="deleteOption(this)">x</span>`;

  ulOptions.appendChild(newOption);

  inputText.value = '';

  optionsArray.push(optionName);
});


function deleteOption(x) {
  //console.log(li)
  li = x.parentElement;
  optionName = li.querySelector('.opcao').innerText
  
  //optionsArray -> remover elemento = innerText do li
  index = optionsArray.indexOf(optionName)
  optionsArray.splice(index, 1)

  li.remove();
}

function sortear() {
  let index = Math.floor(Math.random()*optionsArray.length)
  console.log(index);
  result.innerText = optionsArray[index];
}