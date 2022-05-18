export const validationCardHolder = (str) => {
  const cardNameRegexp = /^[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/
  return cardNameRegexp.test(str);
}

export const validationCardNumber = (str) => {
  const cardNumberRegexp = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/;
  return cardNumberRegexp.test(str);
}

export const validationCardCvv = (str) => {
  const cardCvvRegexp = /^\d{3,4}$/;
  return cardCvvRegexp.test(str);
}

export const validateFormMainFunc = (validateTextWrapper, validateIdText, inputsObject) => {
  const validateWrapper = document.querySelector(`.${validateTextWrapper}`);
  const validateText = document.querySelector(`#${validateIdText}`);
  let {cardnumber, name, securitycode} = inputsObject;

  validateWrapper.style.opacity = 1;
  if (validationCardHolder(name.value) &&
      validationCardNumber(cardnumber.value) &&
      validationCardCvv(securitycode.value)) {
    validateText.textContent = 'Card is validate';
    validateWrapper.style.backgroundColor = '#478a56';
  } else {
    validateText.textContent = 'Card is not validate';
    validateWrapper.style.backgroundColor = '#ff8383';
  }
}

// ! Т.к. я импортирую в тесты именно основную функцию, то создание новых внутри не имеет смысла. 
// ! нужно продумать, чтобы основная функция возвращала результат и можно было передавать только целевые параметры
// ? можно попробовать создать внешние функции с регулярками, которые будут возвращать значения и в тесты передать как объекты кнопок, так и объекты с регулярками