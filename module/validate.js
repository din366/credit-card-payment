export const validationCardHolder = (str) => {
  const cardNameRegexp = /^[a-zA-Z]{2,10}\s[a-zA-Z]{2,10}$/
  return cardNameRegexp.test(str);
}

export const validationCardNumber = (str) => {
  const cardNumberRegexp = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/;
  const cardNumberRegexpAmericanExpress = /^\d{4}\s\d{6}\s\d{5}$/;
  const cardNumberRegexpDiners = /^\d{4}\s\d{6}\s\d{4}$/;

  return cardNumberRegexp.test(str) ||
    cardNumberRegexpAmericanExpress.test(str) || cardNumberRegexpDiners.test(str);
}

export const validationCardCvv = (str) => {
  const cardCvvRegexp = /^\d{3,4}$/;
  return cardCvvRegexp.test(str);
}

export const validateFormMainFunc = (validateTextWrapper, validateIdText, inputsObject) => {
  const validateWrapper = document.querySelector(`.${validateTextWrapper}`);
  const validateText = document.querySelector(`#${validateIdText}`);
  let { cardnumber, name, securitycode } = inputsObject;

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