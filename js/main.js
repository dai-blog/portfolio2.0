'use strict';

{
  const submit = document.getElementById('submit');

  submit.addEventListener('click', (e) => {
    e.preventDefault();
    confirm('フォーム機能を実装していないので送信できません。Byだいき');
  });
}