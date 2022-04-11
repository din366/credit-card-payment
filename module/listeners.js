import { name, cardnumber, expirationdate, securitycode, lightcolor, darkcolor} from "../script.js"
import { mask } from "./maskData.js";
import Inputmask from 'inputmask';

const renderSvgIcon = (innerSvg) => {
  return `<svg id="ccicon" class="ccicon" width="750" height="471" viewBox="0 0 750 471" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  ${innerSvg}
</svg>`
}

const swapColor = color => { // change card color func
  lightcolor.forEach(input => {
    input.classList = 'lightcolor ' + color
  });
  darkcolor.forEach(input => {
    input.classList = 'darkcolor ' + color + 'dark';
  });
};

export const eventListeners = () => {
  const container = document.querySelector('.container');

  const frontCardName = document.querySelector('#svgname');
  const frontCardNumber = document.querySelector('#svgnumber');
  const frontCardDate = document.querySelector('#svgexpire');
  
  const BackCardCvv = document.querySelector('#svgsecurity');
  const backCardName = document.querySelector('#svgnameback');

  const ccicon = document.querySelector('.ccicon');

  const backCardForLogo = document.querySelector('#Back');
  backCardForLogo.style = 'transform:translate3d(400px, 50px, 0px);'

  const dateMask = new Inputmask('99/99'); // mask for date

  name.addEventListener('input', (e) => { // user name input
    
    name.value = name.value.replace(/[^a-zа-я\s]/gi, '');
    frontCardName.textContent = name.value;
    backCardName.textContent = name.value;

    if (name.value.length == 0) {
      frontCardName.textContent = 'ИВАН ИВАНОВ';
      backCardName.textContent = 'Иван Иванов';
    }
  });

  cardnumber.addEventListener('input', () => { // user card number input
    if (cardnumber.value.length === 0) { 
      // if empty input - default values
      frontCardNumber.textContent = '0123 4567 8910 1112';
      ccicon.innerHTML = '';
      backCardForLogo.innerHTML = '';
      swapColor('grey');
    } else {
      frontCardNumber.textContent = cardnumber.value;

      for (const item of mask) {
        if (cardnumber.value.match(item.regex)) { // mask array regular exporession search
          const createCardMask = new Inputmask(item.mask);
          createCardMask.mask(cardnumber);

          if (item.icon !== undefined) { // if !unknown card without logo
            ccicon.innerHTML = renderSvgIcon(item.icon);
          }

          backCardForLogo.innerHTML = item.logo; // add logo in card
          swapColor(item.color); // change card color
          break;
        }
      };
    }
  });
  
  expirationdate.addEventListener('input', () => {
    dateMask.mask(expirationdate); // use Inputmask package
    frontCardDate.textContent = expirationdate.value;

    if (expirationdate.value.length == 0) {
      frontCardDate.textContent = '01/23';
    }
  })

  securitycode.addEventListener('input', () => {
    BackCardCvv.textContent = securitycode.value;
  })

  container.addEventListener('click', ({target}) => {
    if (target.closest('.creditcard') === container.querySelector('.creditcard')){
      container.querySelector('.creditcard').classList.toggle('flipped');
    }
  })
}