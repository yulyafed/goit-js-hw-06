const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputClick);

function onInputClick(event) {
    if (event.currentTarget.value === '') { 
        return spanEl.textContent = 'Anonymous';
    }
    spanEl.textContent = event.currentTarget.value;
};