(function() {
  const classActive = 'select__active';

  const toggleActive = (optionsContainer) => {
    optionsContainer.classList.toggle(classActive);
  };

  const selectedClickHandler = (optionsContainer) => {
    toggleActive(optionsContainer);
  };

  const changeValue = (evt, optionsList, selected, optionsContainer) => {
    const selectLabel = evt.target.closest('.select__label');

    if (selectLabel || optionsList.contains(selectLabel)) {
      selected.textContent = selectLabel.textContent;
      optionsContainer.classList.remove(classActive);
    }
  };

  const optionsListClickHandler = (evt, optionsList, selected, optionsContainer) => {
    changeValue(evt, optionsList, selected, optionsContainer);
  }

  window.makeSelect = (select) => {
    const selected = select.querySelector('.select__selected');
    const optionsContainer = select.querySelector('.select__options');
    const optionsList = select.querySelector('.select__options');

    selected.textContent = select.querySelector('.select__label--default-value').textContent;

    selected.addEventListener('click', () => {
      selectedClickHandler(optionsContainer);
    });

    optionsList.addEventListener('click', (evt) => {
      optionsListClickHandler(evt, optionsList, selected, optionsContainer);
    });  
  };

  const languageSelectHeader = document.querySelector('.header__language-select');
  window.makeSelect(languageSelectHeader);
})();
