const input = document.querySelector('.container-input-input');
const output = document.querySelector('.container-output-output');
const inputSelect = document.querySelector('.select-input-value');
const outputSelect = document.querySelector('.select-output-value');
/////////////////////////////
let VALUES = {
    'm': 1,
    'cm': 0.01,
    'in': 0.0254,
    'ft': 0.3048,
};
/////////////////////////////
let DB;
(async () => {
    DB = await(await fetch('./index.json')).json();
    for (let key in DB) {
        VALUES[key] = DB[key];
        let opt = document.createElement('option');
        opt.value = key;
        opt.innerHTML = key;
        inputSelect.appendChild(opt);
        outputSelect.appendChild(opt.cloneNode(true));
    };
})();

/////////////////////////////
input.addEventListener('input', convert);
inputSelect.addEventListener('change', convert);
outputSelect.addEventListener('change', convert);
output.addEventListener('input', reconvert);
/////////////////////////////
function convert() {
    let result = +input.value * VALUES[inputSelect.value] / VALUES[outputSelect.value];
    output.value = result.toFixed(3);
};
function reconvert() {
    let result = +output.value * VALUES[outputSelect.value] / VALUES[inputSelect.value];
    input.value = result.toFixed(3);
};

