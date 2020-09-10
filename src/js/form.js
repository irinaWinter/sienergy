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

      buttonSubmit.addEventListener('click', function (evt) {
        buttonSubmitClickHandler(evt);
      });
    },
    phoneNumber: '',
    userName: ''
  };

  buttonCallback.addEventListener('click', window.form.buttonCallbackClickHandler);

  // Валидация
  const phoneNumberFieldKeydownHandler = () => {
    if (window.form.phoneNumber.value.match(/\d/g).length === 11) {
      window.form.phoneNumber.classList.remove('call__input--error');
    }
  };

  const userNameFieldKeydownHandler = () => {
    if (window.form.userName.value.trim()) {
      window.form.userName.classList.remove('call__input--error');
    }
  }

  const validateForm = () => {
    if (!number || number.length < 11) {
      window.form.phoneNumber.classList.add('call__input--error');
      window.form.phoneNumber.addEventListener('keydown', phoneNumberFieldKeydownHandler);
    }

    if (!window.form.userName.value.trim()) {
      window.form.userName.classList.add('call__input--error');
      window.form.userName.addEventListener('keydown', userNameFieldKeydownHandler);
    } 
  };
  
  let number;

  const buttonSubmitClickHandler = (evt) => {
    evt.preventDefault();

    number = window.form.phoneNumber.value.match(/\d/g);
 
    if (!number || number.length < 11 || !window.form.userName.value.trim()) {
      validateForm();
    } else {
      showSuccessMessage();
    }
  };

  // Сообщение об успешной отправке заявки
  const successMessageTemplate = document.querySelector('#successful-request')
    .content
    .querySelector('.popup');
  const successMessage = successMessageTemplate.cloneNode(true);

  const showSuccessMessage = () => {
    window.popup.close(callback);
    window.popup.open(successMessage);
  };
})();
