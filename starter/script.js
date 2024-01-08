'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
/* use .querySelectorAll to select all elements with the class 'show-modal', this then returns a nodelist of the elements */
const btnsOpenModal = document.querySelectorAll('.show-modal');
const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

/* loops through the length of the nodelist, adds an event listener function to each modal. When the button is clicked, we will select elements with the 'modal' class, read the list of classes attatched to it, then remove the 'hidden' class from it, thus making the modal window visible, the inverse is also going to happen when the button is clicked whilst in an unhidden state */
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);

  btnCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
}

//add an event listener for whenever a key is pressed, use the .key method to access info for which key is being pressed, if the key being pressed is escape, launch another check to see if the modal is open. If modal is open, use 'closeModal' function to close it with the esc key.
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
