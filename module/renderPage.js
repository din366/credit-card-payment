import { el, mount } from "redom";
import { cardFrontSvg, cardBackSvg } from './svgImage.js'

const body = document.body; // short name

export const init = () => {
  mount(body, el('.payment-title', el('h1', 'Payment Information')));

  mount(body, el('.container', el('.creditcard', el('.front', el('#cssingle')), el('.back'))));

  const creditCardFront = document.querySelector('.front');
  const creditCardBack = document.querySelector('.back');

  creditCardFront.innerHTML = cardFrontSvg; // add svg text from svgImage.js
  creditCardBack.innerHTML = cardBackSvg; // add svg text from svgImage.js

  const fieldName = el('.field-container', 
  el('label', { for:'name'}, 'Name'), 
  el('input', { id:'name', maxlength:20, type:'text'}));

  const fieldCardNumber = el('.field-container.cardNumberWrapper', 
  el('label', {for:'cardnumber'}, 'Card Number'), 
  el('input', {id:'cardnumber', type:'text', pattern:'[0-9]*', inputmode:'numeric'}),
  el('.ccicon'),
  /* el('svg', {id:'ccicon', class:"ccicon", width:750, height:471, viewBox:'0 0 750 471', version:'1.1', xmlns:'http://www.w3.org/2000/svg', 'xmlns:xlink': 'http://www.w3.org/1999/xlink'}) */);

  const fieldExpirationDate = el('.field-container', 
  el('label', {for:'expirationdate'}, 'Expiration (mm/yy)'),
  el('input', {id:'expirationdate', type:'text', pattern:'[0-9]*', inputmode:'numeric'}));

  const fieldSecurityCode = el('.field-container', 
  el('label', {for:'securitycode'}, 'Security Code'),
  el('input', {id:'securitycode', type:'text', pattern:'[0-9]*', inputmode:'numeric',  maxlength:4}));
  
  mount(body, el('.form-container', fieldName, fieldCardNumber, fieldExpirationDate, fieldSecurityCode));
};