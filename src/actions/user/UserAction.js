const submitUserAction = (data) => {
  const url = 'http://localhost:8080/usuario';

  fetch(url, {
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(data)
  })
  .then(response => console.log(response));
}

export default submitUserAction;