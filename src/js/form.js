'use strict';

import Inputmask from "inputmask";
import './successMessage';

(function () {
  const PHONE_NUMBER_MASK = '+7 (999) 999-99-99';

  const callbackTemplate = document.querySelector('#call')
    .content
    .querySelector('.popup');

  const buttonSubmitClickHandler = (evt) => {
    evt.preventDefault();

    window.form.phoneNumberFieldValue = window.form.phoneNumber.value.match(/\d/g);

    if (!window.form.phoneNumberFieldValue
        || window.form.phoneNumberFieldValue.length < 11
        || !window.form.userName.value.trim()){
      window.validation.validateForm();
    } else {
      window.successMessage.show();
    }
  };

  window.form = {
    callback: callbackTemplate.cloneNode(true),
    phoneNumber: '',
    phoneNumberFieldValue: '',
    userName: '',
    buttonCallbackClickHandler () {
      window.popup.open(window.form.callback);

      window.form.userName = document.querySelector('.call__input[name=name]');
      window.form.phoneNumber = document.querySelector('.call__input[name=tel]');

      var im = new Inputmask(PHONE_NUMBER_MASK);
      im.mask(window.form.phoneNumber);

      const buttonSubmit = document.querySelector('.popup__button');
      buttonSubmit.addEventListener('click', function (evt) {
        buttonSubmitClickHandler(evt);
      });
    }
  };

  const buttonCallback = document.querySelector('.user-menu__callback-button');
  buttonCallback.addEventListener('click', window.form.buttonCallbackClickHandler);
})();
