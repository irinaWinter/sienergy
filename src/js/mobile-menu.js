(function () {
  const mobileMenu = document.querySelector('.mobile-menu')

  const buttonMenu = document.querySelector('.page-menu__button');
  
  const closeMenu = () => {
    mobileMenu.classList.add('hidden');
  }

  const buttonCloseClickHandler = () => {
    closeMenu();
  };

  const buttonCallbackClickHandler = () => {
    closeMenu();
    window.form.buttonCallbackClickHandler();
  }

  const buttonMenuClickHandler = () => {
    mobileMenu.classList.remove('hidden');

    const buttonClose = mobileMenu.querySelector('.close-button-js');
    buttonClose.addEventListener('click', buttonCloseClickHandler);

    const buttonCallback = document.querySelector('.mobile-menu__callback-button');
    buttonCallback.addEventListener('click', buttonCallbackClickHandler);
  };

  buttonMenu.addEventListener('click', buttonMenuClickHandler);
})();
