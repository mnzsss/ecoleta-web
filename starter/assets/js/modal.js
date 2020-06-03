const searchButton = document.querySelector('.search-point');
const modalCloseButton = document.querySelector('.modal .close');
const modal = document.querySelector('.modal');

searchButton.addEventListener('click', () => modal.classList.add('open'));
modalCloseButton.addEventListener('click', () => modal.classList.remove('open'));
