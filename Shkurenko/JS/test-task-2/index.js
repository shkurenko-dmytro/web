

//TODO: 1. refactor CONSTANTS 
//TODO: 2. fix bug with sorting by runtime
//TODO: 3. add  reverse sorting from css-classes
//TODO: 4. add search from all languages
//TODO: 5. link to the movie
//TODO: 6. search to substring
//TODO: 7. add search by enter

const output = document.querySelector('table');
const searchSelect = document.querySelector('.search-block__select select');
const searchInput = document.querySelector('.search-block__input input');
const tableTr = document.querySelector('table thead tr');
const tableTbody = document.getElementsByTagName('td');
const requestURL = 'index.json';
const searchBtn = document.querySelector('.search-block__button');
const sortByTitleBtn = document.querySelector('.btn__title');
const sortByYearBtn = document.querySelector('.btn__year');
const sortByRuntimeBtn = document.querySelector('.btn__runtime');



//* events functions
searchBtn.addEventListener('click', () => {
    remove_Tables_data();
    if (!searchInput.value.trim()) renderAll();
    else filterBySelected(searchSelect.value, searchInput.value);
});
let flagTitle = 'straight';
sortByTitleBtn.addEventListener('click', () => {
    sortByTitle();
});
sortByYearBtn.addEventListener('click', () => {
    sortByYear();
});
sortByRuntimeBtn.addEventListener('click', () => {
    sortByRuntime();
});
//* ///////////////////////



function filterBySelected( key , value ) {
    let a = fetch(requestURL).then(response => response.json());
    a.then(data => {
        let b = data.filter(item => item[key] == value);
        console.log( 'filterBySelected ' ,b);
        renderSelectedData(b);
    });
    
};


function sortByTitle() {
    let a = fetch(requestURL).then(response => response.json());
    a.then(data => {
        function SortArray(x, y){
            return x.Title.localeCompare(y.Title);
        }
        if (flagTitle == 'straight') {
            let b = data.sort(SortArray);
            flagTitle = 'reverse';
            renderSelectedData(b);
        } else {
        let b = data.sort(SortArray).reverse();
        flagTitle = 'straight';
        renderSelectedData(b);
        }
        
        console.log('sortByTitle', b, );
        renderSelectedData(b);
    });
}
function sortByYear() {
    let a = fetch(requestURL).then(response => response.json());
    a.then(data => {
        let b = data.sort((a, b) => a.Year - b.Year);
        console.log('sortByYear' ,b);
        renderSelectedData(b);
    });
};
function sortByRuntime() {
    let a = fetch(requestURL).then(response => response.json());
    a.then(data => {
        let b = data.sort((a, b) => a.Runtime > b.Runtime);
        console.log('sortByYear' ,b);
        renderSelectedData(b);
    });
}//! bug with sorting by runtime


function renderSelectedData(array_items) {
        remove_Tables_data();
        console.log('renderSelectedData', array_items);
        for (i in array_items){
        let tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${  array_items[i].Title}</td>
        <td>${array_items[i].Year}</td>
        <td>${array_items[i].Runtime}</td>
    `;
    output.append(tr);
    }
}
function renderAll() {
    if(output.children.length <=2) {
        remove_Tables_data();
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
        
}


function remove_Tables_data() {
    while (output.children.length > 2) {
        output.removeChild(output.lastChild);
    }
}

renderAll();


