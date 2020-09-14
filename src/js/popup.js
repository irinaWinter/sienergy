'use strict';

(function () {
  const Key = {
    ESC: 'Escape'
  };

  const main = document.querySelector('.page-main');

  const buttonCloseClickHandler = (popup) => {
    window.popup.close(popup);
  };

  const popupKeydownHandler = (evt, popup) => {
    if (evt.key === Key.ESC) {
      window.popup.close(popup);
    }
  };

  window.popup = {
    open (popup) {
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
    close (popup) {
      popup.remove();
    }
  };  
})();
