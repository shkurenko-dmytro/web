const jsonResponse = fetch('./json/data.json').then((response) => response.json());

jsonResponse.then(data => {
  data.forEach(element => {
    console.log(element);
  });
})