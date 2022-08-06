const inputEl = document.querySelector('input');

inputEl.addEventListener('blur', onInputBlur);

const dataLengthEl = Number(inputEl.getAttribute('data-length'));

function onInputBlur(event) {
      
    if (event.currentTarget.value.length === dataLengthEl) { 
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
}
