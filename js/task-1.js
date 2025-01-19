const ulElem = document.querySelectorAll('ul#categories > li.item');
console.log(`Number of categories: ${ulElem.length}`);

const ulCategories = document.querySelector('ul#categories');
const items = ulCategories.querySelectorAll('li.item');

items.forEach(item => {
    const title = item.querySelector('h2').textContent;
    const itemCount = item.querySelectorAll('li').length;

    console.log(`Category: ${title}`);
    console.log(`Number of items: ${itemCount}`);
});
