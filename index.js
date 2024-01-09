// Add your code here
function submitData(userName, userEmail) {
  return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
          'content-type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify({
          name: userName,
          email: userEmail
      })
  })
      .then(response => response.json())
      .then(function (object) {
          document.body.innerHTML = object['id']

      })
      .catch(function (error) {
          document.body.innerHTML = error.message
      })
}
