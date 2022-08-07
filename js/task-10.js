const inputEl = document.querySelector('[type="number"]');
const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');
const divBoxesEl = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

 const divEl = document.createElement('div');
  divEl.width = '-30px'; 
  divEl.height = '30px';
  divEl.style.backgroundColor = getRandomHexColor();
divBoxesEl.append(divEl);
// console.log(divEl)
btnCreateEl.addEventListener('click', createBoxes); 
 
function createBoxes(amount) { 
 
  }

btnDestroyEl.addEventListener('click', destroyBoxes);

function destroyBoxes(){ 
  divEl.remove();
}

  