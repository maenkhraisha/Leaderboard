const DomUL = document.getElementById('user-list');

const createList = (users) => {
  DomUL.innerHTML = '';
  for (const user of users) {
    const DomLi = document.createElement('li');
    const DomName = document.createElement('p');
    const DomScrore = document.createElement('p');

    DomName.textContent = user.user;
    DomScrore.textContent = user.score;

    DomLi.appendChild(DomName);
    DomLi.appendChild(DomScrore);
    DomUL.appendChild(DomLi);
  }
};

export default { createList };