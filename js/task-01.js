const itemEl = document.querySelectorAll('.item');
console.log('Number of categories: ', itemEl.length);

const titleEl = document.querySelectorAll('h2');
console.log('Category: ', titleEl[0].textContent);
console.log('Category: ', titleEl[1].textContent);
console.log('Category: ', titleEl[2].textContent);

const itemUlEl = document.querySelectorAll('.item ul');
console.log(itemUlEl)

const liEl = itemUlEl[0].querySelectorAll('li');

console.log('Elements: ', liEl.length);




