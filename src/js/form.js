import Inputmask from "inputmask";

(function () {
  const callbackTemplate = document.querySelector('#call')
    .content
    .querySelector('.popup');
  const callback = callbackTemplate.cloneNode(true);
  const buttonCallback = document.querySelector('.user-menu__callback-button');

  window.form = {
    buttonCallbackClickHandler: function () {
      window.popup.open(callback);

      var phoneNumber = document.querySelector('.call__input--phone-number-js');

      var im = new Inputmask('+7 (999) 999-99-99');
      im.mask(phoneNumber);

      const buttonSubmit = document.querySelector('.popup__button');

      buttonSubmit.addEventListener('click', buttonSubmitClickHandler);
    }
  };

  buttonCallback.addEventListener('click', window.form.buttonCallbackClickHandler);

  // Сообщение об успешной отправке заявки
  const successMessageTemplate = document.querySelector('#successful-request')
    .content
    .querySelector('.popup');
  const successMessage = successMessageTemplate.cloneNode(true);

  const submitForm = (evt) => {
    evt.preventDefault();
    window.popup.close(callback);
    window.popup.open(successMessage);
  };

  const buttonSubmitClickHandler = (evt) => {
    submitForm(evt);
  };
})();