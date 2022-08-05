const counterValue = {
    value: 0,
    decrement() { 
        this.value -= 1;
    },

    increment() { 
        this.value += 1;

    }
}

const decrementBtnEl = document.querySelector('button[data-action="decrement"]');
const incrementBtnEl = document.querySelector('button[data-action="increment"]');
const valueBtnEl = document.querySelector('#value');

decrementBtnEl.addEventListener('click', () => { 
    counterValue.decrement();
    valueBtnEl.textContent = counterValue.value;
})
incrementBtnEl.addEventListener('click', () => { 
    counterValue.increment();
    valueBtnEl.textContent = counterValue.value;
})