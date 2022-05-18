import { init } from "./module/renderPage.js";
import { eventListeners } from "./module/listeners.js";

init();

export const name = document.getElementById('name');
export const cardnumber = document.getElementById('cardnumber');
export const expirationdate = document.getElementById('expirationdate');
export const securitycode = document.getElementById('securitycode');
export const lightcolor = document.querySelectorAll('.lightcolor');
export const darkcolor = document.querySelectorAll('.darkcolor');
const creditcard = document.querySelector('.creditcard');

eventListeners();