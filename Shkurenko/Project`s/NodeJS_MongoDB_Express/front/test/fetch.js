const reqURL = "https://tests-ipny.onrender.com";

function sendRequest(method, url, body = null) {
  const headers = {
    "Content-Type": 'application/json'
  }

  return fetch(url, {
    method: method,
    mode : "no-cors",
    body: JSON.stringify(body),
    headers: headers
  }).then(response => {
    console.log(response);
    
  }).catch(error => {
    console.log(error);
  })
}

// sendRequest('GET', reqURL)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

const body = {
  name: 'Max',
  age: 20
}

sendRequest('POST', reqURL, body)
  .then(data => console.log(data))
  .catch(err => console.log(err))