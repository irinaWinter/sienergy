'use strict';

(function () {
  const successMessageTemplate = document.querySelector('#successful-request')
    .content
    .querySelector('.popup');
  const successMessage = successMessageTemplate.cloneNode(true);

  window.successMessage = {
    show: function () {
      window.popup.close(window.form.callback);
      window.popup.open(successMessage);
    }
  }
})();
