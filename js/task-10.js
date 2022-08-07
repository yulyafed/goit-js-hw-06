/* задачу сама вирішити не змогла,допоміг чоловік*/

const inputEl = document.querySelector('[type="number"]');
const btnCreateEl = document.querySelector('[data-create]');
const btnDestroyEl = document.querySelector('[data-destroy]');
const divBoxesEl = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  ondestroyBoxes();

  let width = 30;
  let height = 30;
  for (let i = 0; i < amount; i += 1) {
    width += i * 10;
    height += i * 10;

    const divEl = document.createElement('div');
    divEl.style.width = String(width) + 'px';
    divEl.style.height = String(height) + 'px';
    divEl.style.backgroundColor = getRandomHexColor();
    divBoxesEl.append(divEl);
  }
}


btnCreateEl.addEventListener('click', onCreateBoxes);
function onCreateBoxes() {
  const amount = Number(inputEl.value)
  createBoxes(amount)
}


btnDestroyEl.addEventListener('click', ondestroyBoxes);
function ondestroyBoxes() {
  divBoxesEl.innerHTML = '';
}

