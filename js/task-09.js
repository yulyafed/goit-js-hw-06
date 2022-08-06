const btnEl = document.querySelector(".change-color");
const spanEl = document.querySelector('.color');

btnEl.addEventListener('click', onBtnClick);

  function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onBtnClick(event) { 
  document.body.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
}

