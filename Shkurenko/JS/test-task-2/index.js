
const output = document.querySelector('table');
const tableTr = document.querySelector('table thead tr');
const tableTbody = document.getElementsByTagName('td');
const requestURL = 'index.json';
const searchBtn = document.querySelector('.search-block__button');

///////////////////////////// Tesr show all data table   /////////////////////////////
searchBtn.addEventListener('click', () => {
        if(output.childNodes.length <=5)renderAll();
});

let value = 'Vikings';
let key = 'Title';

function filterBySelected(  _key , value ) {
    let a = fetch(requestURL).then(response => response.json());
    a.then(data => {
        let b = data.filter(item => item[_key] == value);
        console.log( 'filterBySelected ' ,b);
    });
};
function sortByYear() {
    let a = fetch(requestURL).then(response => response.json());
    a.then(data => {
        let b = data.sort((a, b) => a.Year - b.Year);
        console.log('sortByYear' ,b);
    });
}
function renderAll() {
    let a = fetch(requestURL).then(response => response.json());
    a.then(data => {
        data.forEach(item => {
            let tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${item.Title}</td>
                <td>${item.Year}</td>
                <td>${item.Runtime}</td>
            `;
            output.append(tr);
        });
        
        });
        
}

function sortByTitle() {
    let a = fetch(requestURL).then(response => response.json());
    a.then(data => {
        function SortArray(x, y){
            return x.Title.localeCompare(y.Title);
        }
        let b = data.sort(SortArray);
        console.log('sortByTitle', b, );
    });
}


