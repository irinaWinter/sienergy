(function () {
  const mobileMenuTemplate = document.querySelector('#mobile-menu')
    .content
    .querySelector('.popup');
  const mobileMenu = mobileMenuTemplate.cloneNode(true);
  const buttonMenu = document.querySelector('.page-menu__button');

  const buttonMenuClickHandler = () => {
    window.popup.open(mobileMenu);

    const languageSelect = document.querySelector('.mobile-menu__language-select');
    window.makeSelect(languageSelect);

    const buttonCallback = document.querySelector('.mobile-menu__callback-button');
    buttonCallback.addEventListener('click', window.form.buttonCallbackClickHandler);
  };

  buttonMenu.addEventListener('click', buttonMenuClickHandler);
})();
