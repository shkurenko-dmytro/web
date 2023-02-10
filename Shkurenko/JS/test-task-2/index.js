
const output = document.querySelector('div');

/////////////////////////////
let FILMS = [];
let DB;
(async () => {
    DB = await(await fetch('./index.json')).json();
    for (let key in DB) {
        FILMS[key] = DB[key];
    };
})();
console.log(FILMS);

for (const key in FILMS) {
     console.log(FILMS.Year);
     console.log(FILMS[key].Year);
}

console.log(FILMS[data]);
//let f = FILMS.filter(film => film.title === 'The Shawshank Redemption');