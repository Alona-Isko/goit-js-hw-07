// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text
// обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const refs = {
    input: document.querySelector('#font-size-control'),
    content: document.querySelector('#text'),
};

refs.input.addEventListener('input', onInputFontSize);

function onInputFontSize(event) {
    refs.content.style.fontSize = event.currentTarget.value + "px";
}

