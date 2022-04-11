import { init } from "./module/renderPage.js";
import { eventListeners } from "./module/listeners.js";

init();


export const name = document.getElementById('name');
export const cardnumber = document.getElementById('cardnumber');
export const expirationdate = document.getElementById('expirationdate');
export const securitycode = document.getElementById('securitycode');
// const svgname = document.getElementById('svgname')
// const svgnameback = document.getElementById('svgnameback')
export const lightcolor = document.querySelectorAll('.lightcolor');
export const darkcolor = document.querySelectorAll('.darkcolor');
const creditcard = document.querySelector('.creditcard');

eventListeners();

// Что-бы перевернуть карту используйте класс flipped для элемента с классом creditcard

// данные для определения типа карты
// для вставки логотипа и иконки уже полученны элементы выше ccicon и cclogo




// смена цвета у карточки






