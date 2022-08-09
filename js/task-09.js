const btnEl = document.querySelector(".change-color");
const spanEl = document.querySelector('.color');

btnEl.addEventListener('click', onBtnClick);

  function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onBtnClick(event) { 
  const hexColor = getRandomHexColor();
  document.body.style.backgroundColor = hexColor;
  spanEl.textContent = hexColor;
}

