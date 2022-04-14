import './style.css';
import apiFun from './module/api-actions.js';
import domFun from './module/dom-action.js';

const BtnRefresh = document.getElementById('refresh');
const BtnSubmit = document.getElementById('submit');
const TextName = document.getElementById('name');
const TextScore = document.getElementById('score');

BtnRefresh.addEventListener('click', () => {
  apiFun.getUsers()
    .then((resolve) => {
      domFun.createList(resolve);
    });
});

BtnSubmit.addEventListener('click', () => {
  const data = apiFun.addUser(TextName.value, TextScore.value);
  data.then(() => {
    TextName.value = '';
    TextScore.value = '';
  }).then(() => {
    BtnRefresh.click();
  });
});

window.addEventListener('load', () => {
  BtnRefresh.click();
});