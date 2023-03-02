//*variables
const output = document.querySelector('table');
const searchSelect = document.querySelector('.search-block__select select');
const searchInput = document.querySelector('.search-block__input input');
const requestURL = 'index.json';
const searchBtn = document.querySelector('.search-block__button');
const sortByTitleBtn = document.querySelector('.btn__title');
const sortByYearBtn = document.querySelector('.btn__year');
const sortByRuntimeBtn = document.querySelector('.btn__runtime');
const buttonArrow = document.querySelector('.btn');

//* events functions
searchBtn.addEventListener('click', () => {
    remove_Tables_data();
    sortByRuntimeBtn.childNodes[1].textContent = '';
    sortByTitleBtn.childNodes[1].textContent = '';
    sortByYearBtn.childNodes[1].textContent = '';
    if (!searchInput.value.trim()) renderAll();
    else filterBySelected(searchSelect.value, searchInput.value);
    if (output.children.length < 2){ 
        renderSelectedData([{Title: 'No results', Year: '', Runtime: ''}]);
    };
    console.log('searchBtn'.toUpperCase());
    
});
searchInput.addEventListener( 'keypress', (event) => {
    if (event.key == 'Enter') {
        remove_Tables_data();
        sortByRuntimeBtn.childNodes[1].textContent = '';
        sortByTitleBtn.childNodes[1].textContent = '';
        sortByYearBtn.childNodes[1].textContent = '';
        if (!searchInput.value.trim()) renderAll();
        else filterBySelected(searchSelect.value, searchInput.value);
    };
});
sortByTitleBtn.addEventListener('click', () => {
    sortByTitle();
});
sortByYearBtn.addEventListener('click', () => {
    sortByYear();
});
sortByRuntimeBtn.addEventListener('click', () => {
    sortByRuntime();
});



//*function for filtering
function filterBySelected( key , value ) {
    let a = fetch(requestURL).then(response => response.json());
    a.then(data => {
        let b = data.filter(item => (item[key].toUpperCase()).includes(value.toUpperCase()));
        renderSelectedData(b);
    });
    
};


//* functions for sorting
function sortByTitle() {
    let a = fetch(requestURL).then(response => response.json());
    a.then(data => {
        function SortArray(x, y){
            return x.Title.localeCompare(y.Title);
        }
        if (sortByTitleBtn.classList.contains('straight')) {
            let b = data.sort(SortArray);
            sortByTitleBtn.classList.replace('straight', 'reverse');
            sortByTitleBtn.childNodes[1].textContent = '↓';
            sortByRuntimeBtn.childNodes[1].textContent = '';
            sortByYearBtn.childNodes[1].textContent = '';
            renderSelectedData(b);
        } else {
            let b = data.sort(SortArray).reverse();
            sortByTitleBtn.classList.replace('reverse', 'straight');
            sortByTitleBtn.childNodes[1].textContent = '↑';
            sortByRuntimeBtn.childNodes[1].textContent = '';
            sortByYearBtn.childNodes[1].textContent = '';
            renderSelectedData(b);
        }
    });
}
function sortByYear() {
    let a = fetch(requestURL).then(response => response.json());
    a.then(data => {
        if (sortByYearBtn.classList.contains('straight')) {
            let b = data.sort((a, b) => a.Year - b.Year);
            sortByYearBtn.classList.replace('straight', 'reverse');
            sortByYearBtn.childNodes[1].textContent = '↓';
            sortByRuntimeBtn.childNodes[1].textContent = '';
            sortByTitleBtn.childNodes[1].textContent = '';
            renderSelectedData(b);
        }
        else {
            let b = data.sort((a, b) => a.Year - b.Year).reverse();
            sortByYearBtn.classList.replace('reverse', 'straight');
            sortByYearBtn.childNodes[1].textContent = '↑';
            sortByRuntimeBtn.childNodes[1].textContent = '';
            sortByTitleBtn.childNodes[1].textContent = '';
            renderSelectedData(b);
        };
    });
};
function sortByRuntime() {
    let a = fetch(requestURL).then(response => response.json());
    a.then(data => {
        if (sortByRuntimeBtn.classList.contains('straight')) {
            let b = data.sort((a, b) => a.Runtime - b.Runtime);
            sortByRuntimeBtn.classList.replace('straight', 'reverse');
            sortByRuntimeBtn.childNodes[1].textContent = '↓';
            sortByTitleBtn.childNodes[1].textContent = '';
            sortByYearBtn.childNodes[1].textContent = '';
            renderSelectedData(b);
        }
        else {
            let b = data.sort((a, b) => a.Runtime - b.Runtime).reverse();
            sortByRuntimeBtn.classList.replace('reverse', 'straight');
            sortByRuntimeBtn.childNodes[1].textContent = '↑';
            sortByTitleBtn.childNodes[1].textContent = '';
            sortByYearBtn.childNodes[1].textContent = '';
            renderSelectedData(b);
        };
    });
}


//* functions for rendering
function renderSelectedData(array_items) {
        
    if( array_items.length == 0) array_items = [{Title: 'No results', Year: '', Runtime: ''}]; 
    remove_Tables_data();
    for (i in array_items){
        let tr = document.createElement('tr');
        if( array_items[i].Title == 'No results'){
            tr.innerHTML = `
        <td>${  array_items[i].Title}</td>
        <td>${array_items[i].Year}</td>
        <td>${array_items[i].Runtime }</td>
        `;}
        else{
            tr.innerHTML = `
            <td>${  array_items[i].Title}</td>
            <td>${array_items[i].Year}</td>
            <td>${array_items[i].Runtime + 'min'}</td>
            `;
        }
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
                    <td>${item.Runtime +' min'}</td>
                `;
                output.append(tr);
            });
            
        });
    }
        
}


//* function for removing all data from table
function remove_Tables_data() {
    while (output.children.length > 2) {
        output.removeChild(output.lastChild);
    }
}

renderAll();


