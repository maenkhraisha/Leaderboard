// === fetch data from API ===//
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/VYz14K82vE17A0uJo9Rl/scores/';

const getUsers = async () => {
  const request = new Request(url);
  const response = await fetch(request);
  const data = await response.json();

  return data.result;
};

const addUser = async (userName, userScore) => {
  const request = new Request(url);
  fetch(request, {
    method: 'POST',
    body: JSON.stringify({
      user: userName,
      score: userScore,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((respo) => respo.json());
};

export default { getUsers, addUser };