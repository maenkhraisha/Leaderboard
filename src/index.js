import './style.css';
import apiFun from './module/api-actions.js';
import domFun from './module/dom-action.js';

const BtnRefresh = document.getElementById('refresh');
const BtnSubmit = document.getElementById('submit');
const TextName = document.getElementById('name');
const TextScore = document.getElementById('score');

BtnRefresh.addEventListener('click', () => {
	const data = apiFun.getUsers();
	data.then((resolve) => {
		domFun.createList(resolve);
	});
});

BtnSubmit.addEventListener('click', () => {
	apiFun.addUser(TextName.value, TextScore.value);
	TextName.innerHTML = '';
	TextScore.innerHTML = '';
});