const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
ingredients.forEach(elem => {
  
  const ulEl = document.querySelector('ul');
  console.log(ulEl);
  const liEl = document.createElement('li');
  liEl.textContent = elem;
  liEl.classList.add ('item');
  ulEl.append(liEl);
});
