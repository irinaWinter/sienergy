'use strict';

(function() {
  const CLASS_ACTIVE = 'select__active';

  const toggleActive = (optionsContainer) => {
    optionsContainer.classList.toggle(CLASS_ACTIVE);
  };

  const selectedClickHandler = (optionsContainer) => {
    toggleActive(optionsContainer);
  };

  const changeValue = (evt, optionsList, selected, optionsContainer) => {
    const selectLabel = evt.target.closest('.select__label');

    if (selectLabel || optionsList.contains(selectLabel)) {
      selected.textContent = selectLabel.textContent;
      optionsContainer.classList.remove(CLASS_ACTIVE);
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

  const languageSelectMobileMenu = document.querySelector('.mobile-menu__language-select');
  window.makeSelect(languageSelectMobileMenu);
})();
