const popup = document.querySelector('.modal');
const closeButton = document.querySelector('.modal__close');
const popupClosed = document.cookie.includes('popupClosed=true');

if (!popupClosed) {
  popup.classList.add('modal_active');
  }

closeButton.addEventListener('click', () => {
  popup.classList.remove('modal_active');
  document.cookie = 'popupClosed=true; expires=Fri, 31 Dec 9999 00:00:00 GMT; path=/;';
});

