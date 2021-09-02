'use strict';
{
  const menu = document.getElementById('bars');
  const close = document.getElementById('close');
  const modal = document.getElementById('modal');

  menu.addEventListener('click', () => {
    modal.classList.add('appear');
    menu.classList.add('hide');
  });

  close.addEventListener('click', () => {
    modal.classList.remove('appear');
    menu.classList.remove('hide');
  });

  modal.addEventListener('click', () => {
    modal.classList.remove('appear');
    menu.classList.remove('hide');
  });
}