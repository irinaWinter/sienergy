(function () {
  const key = {
    esc: 'Escape'
  //   enter: 'Enter',
  //   tab: 'Tab',
  //   leftClick: 0,
  //   leftButton: 1
  };

  const main = document.querySelector('.page-main');

  const buttonCloseClickHandler = (popup) => {
    window.popup.close(popup);
  };

  const popupKeydownHandler = (evt, popup) => {
    if (evt.key === key.esc) {
      window.popup.close(popup);
    }
  };

  window.popup = {
    open: function (popup) {
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
    },
    close: function (popup) {
      popup.remove();
    }
  };  
})();
