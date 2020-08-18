// (function () {

//   var key = {
//     esc: 'Escape',
//     enter: 'Enter',
//     tab: 'Tab',
//     leftClick: 0,
//     leftButton: 1
//   };

//   var main = document.querySelector('.page-main');
//   var buttonOpen = document.querySelector('.page-menu__button');


//   var buttonOpenClickHandler = () => {
//     openCallbackWindow();
//   };

//   buttonOpen.addEventListener('click', buttonOpenClickHandler);




//   var closeButtonClickHandler = () => {
//     closeCallbackWindow();
//   }

//   var callbackWindowKeydownHandler = evt => {
//     if (evt.button === 'Escape') {
//       console.log(evt.button, 'dfljs');
//       closeCallbackWindow();
//     } else {
//       evt.preventDefault();
//       console.log('sdkfjh')
//     }
//   };

//   var openCallbackWindow = () => {
//     buttonOpen.blur();



//     var closeButton = document.querySelector('.popup__close');
//     closeButton.addEventListener('click', closeButtonClickHandler);

//     var buttonSubmit = document.querySelector('.popup__button');
//     // buttonSubmit.addEventListener('click', buttonSubmitClickHandler);

//     var phoneNumber = document.querySelector('.call__input--phone-number-js');

//     // window.addEventListener('keydown', callbackWindowKeydownHandler);
//   };

//   var closeCallbackWindow = () => {

//   };

// })();