// Напиши скрипт для создания галлереи изображений
// по массиву данных.

// В HTML есть список ul#gallery.
// < ul id = "gallery" ></ul >
    
// Используй массив объектов images для создания тегов img вложенных в li.
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.


const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryListEl = document.querySelector('#gallery');

const createImageEl = ({ url, alt }) => {
  const itemEl = document.createElement('li');
  const imageEl = document.createElement('img');

  imageEl.src = url
  imageEl.alt = alt
  imageEl.width = 320

  itemEl.append(imageEl);
  return itemEl;
};

const gallery = images.map(createImageEl);

console.log(gallery);

galleryListEl.append(...gallery);


// galleryImagesEl.insertAdjacentHTML('afterbegin', `<li>
// <img src = ${images[0].url}
// alt = ${images[0].alt}
// width = "640">
// </li >`);
// чтобы обеспечить перенос строк в коде, нужно использовать обратные кавычки, как для шаблонной строки - ``
// width вставлено для масштабирования только.
// Осталось написать перебирающую функцию. (edited) 