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
  newOption.innerHTML =
    `<span class="opcao"><h2 id='opcao'>${optionName}</h2></span>` +
    `<span onclick="deleteOption(this)"><i class="fa-solid fa-trash"></i></span>`;

  ulOptions.appendChild(newOption);

  inputText.value = '';

  optionsArray.push(optionName);
  if (optionsArray.length === 1){
    result.innerText = 'Coloque mais uma opção'
  }
  if (optionsArray.length > 1){result.innerText = '';}
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

// function deleteAll (){
//   optionsArray = []
//   ulOptions = '';
//   optionName = '';
//   newOption = '';
// }
