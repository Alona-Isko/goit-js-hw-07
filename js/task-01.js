// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4


const categoriesRef = document.querySelectorAll('.item');
const quantity = categoriesRef.length;
console.log(`В списке ${quantity} категории.`);

const showTitles = element => element.forEach(elem =>
    console.log(`Категория: ${elem.querySelector('h2').textContent}.
    Количество элементов: ${elem.querySelectorAll('li').length}.`));

showTitles(categoriesRef);

