'use strict';

(function () {
  const PHONE_NUMBER_LENGTH = 11;

  const markAsInvalid = field => {
    field.classList.add('call__input--error');
  };

  const markAsValid = field => {
    field.classList.remove('call__input--error');
  };

  const phoneNumberFieldKeyupHandler = (fieldIsValid) => {
    if (fieldIsValid) {
      markAsValid(window.form.phoneNumber);
    }
  };

  const userNameFieldKeydownHandler = (fieldIsValid) => {
    if (fieldIsValid) {
      markAsValid(window.form.userName);
    }
  };

  window.validation = {
    phoneNumberFieldIsInvalid: '',
    userNameFieldIsInvalid: '',
    validateForm: function () {
      window.validation.phoneNumberFieldIsInvalid = !window.form.phoneNumberFieldValue
        || window.form.phoneNumberFieldValue.length < PHONE_NUMBER_LENGTH;
      window.validation.userNameFieldIsInvalid = !window.form.userName.value.trim();

      if (window.validation.phoneNumberFieldIsInvalid) {
        markAsInvalid(window.form.phoneNumber);
        window.form.phoneNumber.addEventListener('keyup', function () {
          phoneNumberFieldKeyupHandler(window.validation.phoneNumberFieldIsInvalid)
        });
      }
  
      if (window.validation.userNameFieldIsInvalid) {
        markAsInvalid(window.form.userName);
        window.form.userName.addEventListener('keydown', function () {
          userNameFieldKeydownHandler(window.validation.userNameFieldIsInvalid)
        });
      }
    }
  };
})();
