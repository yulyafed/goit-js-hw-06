const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('ul');
let elements = [];
ingredients.forEach(elem => {
  const liEl = document.createElement('li');
  liEl.textContent = elem;
  liEl.classList.add('item');
  elements.push(liEl);
});

ulEl.append(...elements);

