import Inputmask from "inputmask";

(function () {
  const callbackTemplate = document.querySelector('#call')
    .content
    .querySelector('.popup');
  const callback = callbackTemplate.cloneNode(true);
  const buttonCallback = document.querySelector('.user-menu__callback-button');

  window.form = {
    buttonCallbackClickHandler () {
      window.popup.open(callback);

      window.form.userName = document.querySelector('.call__input[name=name]');
      window.form.phoneNumber = document.querySelector('.call__input[name=tel]');

      var im = new Inputmask('+7 (999) 999-99-99');
      im.mask(window.form.phoneNumber);

      const buttonSubmit = document.querySelector('.popup__button');

      buttonSubmit.addEventListener('click', buttonSubmitClickHandler);
    },
    phoneNumber: '',
    userName: ''
  };

  buttonCallback.addEventListener('click', window.form.buttonCallbackClickHandler);

  // Сообщение об успешной отправке заявки
  const successMessageTemplate = document.querySelector('#successful-request')
    .content
    .querySelector('.popup');
  const successMessage = successMessageTemplate.cloneNode(true);

  const submitForm = () => {
    window.validation.validateFields();
  };

  const buttonSubmitClickHandler = () => {
    submitForm();
  };
})();
