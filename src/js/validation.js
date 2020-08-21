(function () {
  window.validation = {
    validateFields: function () {
      window.validation.showInvalidField(window.form.phoneNumber);
      window.validation.showInvalidField(window.form.userName);
      window.validation.checkPnoneNumberField();
    },
    checkPnoneNumberField: function () {
      if (window.form.phoneNumber.value.indexOf('_') > -1) {
        window.form.phoneNumber.setCustomValidity('Вы не заполнили поле до конца');
        window.form.phoneNumber.classList.remove('call__input--success');
        window.form.phoneNumber.classList.add('call__input--error');
      } else {
        window.form.phoneNumber.setCustomValidity('');
      }
    },
    showInvalidField: function (field) {
      if (!field.checkValidity()) {
        field.classList.add('call__input--error');
      } else {
        field.classList.remove('call__input--error');
        field.classList.add('call__input--success');
      }
    }
  }
})();
