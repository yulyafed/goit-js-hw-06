const itemEl = document.querySelectorAll('.item');
console.log('Number of categories: ', itemEl.length);

// for (let i = 0; i < itemEl.length; i += 1) {
//     const itemTitleEl = itemEl[i].firstElementChild;
//     console.log('Category: ', itemTitleEl.textContent);
//     const itemLiEl = itemEl[i].querySelectorAll('li');
//     console.log('Elements: ', itemLiEl.length);
// }

itemEl.forEach(item => { 
    const itemTitleEl = item.firstElementChild;
    console.log('Category: ', itemTitleEl.textContent);
    const itemLiEl = item.querySelectorAll('li');
    console.log('Elements: ', itemLiEl.length);   
});