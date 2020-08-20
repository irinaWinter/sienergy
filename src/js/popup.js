// import Inputmask from "inputmask";

(function () {

  const key = {
    esc: 'Escape'
  //   enter: 'Enter',
  //   tab: 'Tab',
  //   leftClick: 0,
  //   leftButton: 1
  };

  const main = document.querySelector('.page-main');

  const closePopup = (popup) => {
    popup.remove();
  };

  const buttonCloseClickHandler = (popup) => {
    closePopup(popup);
  };

  const popupKeydownHandler = (evt, popup) => {
    if (evt.key === key.esc) {
      closePopup(popup);
    }
  };

  const openPopup = (popup) => {
    main.appendChild(popup);

    const buttonsClose = document.querySelectorAll('.close-button-js');
    buttonsClose.forEach(function(item) {
      item.addEventListener('click', function () {
        buttonCloseClickHandler(popup);
      });
    });

    window.addEventListener('keydown', function (evt) {
      popupKeydownHandler(evt, popup);
    });
  };

  // Мобильное меню
  const mobileMenuTemplate = document.querySelector('#mobile-menu')
    .content
    .querySelector('.popup');
  const mobileMenu = mobileMenuTemplate.cloneNode(true);

  const buttonMenu = document.querySelector('.page-menu__button');

  const buttonMenuClickHandler = () => {
    openPopup(mobileMenu);

    const languageSelect = document.querySelector('.mobile-menu__language-select');
    window.makeSelect(languageSelect);

    const buttonCallback = document.querySelector('.mobile-menu__callback-button');
    buttonCallback.addEventListener('click', buttonCallbackClickHandler);
  };

  buttonMenu.addEventListener('click', buttonMenuClickHandler);

  // Обратный звонок
  const callbackTemplate = document.querySelector('#call')
    .content
    .querySelector('.popup');
  const callback = callbackTemplate.cloneNode(true);

  const buttonCallback = document.querySelector('.user-menu__callback-button');

  const buttonCallbackClickHandler = () => {
    openPopup(callback);

    const buttonSubmit = document.querySelector('.popup__button');
    buttonSubmit.addEventListener('click', buttonSubmitClickHandler);
  };

  buttonCallback.addEventListener('click', buttonCallbackClickHandler);

  // Сообщение об успешной отправке заявки
  const successMessageTemplate = document.querySelector('#successful-request')
    .content
    .querySelector('.popup');
  const successMessage = successMessageTemplate.cloneNode(true);

  const submitForm = (evt) => {
    evt.preventDefault();
    closePopup(callback);
    openPopup(successMessage);
  };

  const buttonSubmitClickHandler = (evt) => {
    submitForm(evt);
  };
})();