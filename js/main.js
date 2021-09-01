'use strict';

{
// お問い合わせフォームお知らせ
  const submit = document.getElementById('submit');

  submit.addEventListener('click', (e) => {
    e.preventDefault();
    confirm('フォーム機能を実装していないので送信できません。Byだいき');
  });

// メニューバー
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