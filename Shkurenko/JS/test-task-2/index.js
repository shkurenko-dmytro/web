
const output = document.querySelector('div');
const requestURL = 'example_2.json';

/////////////////////////////

let a = fetch(requestURL).then(response => response.json());
console.log(a);
a.then(data => {
    console.log(data.quiz.sport.q1.question);
    output.innerHTML = data.quiz.sport.q1.question;
    output.innerHTML += data.quiz.sport.q1.options[0];
});
