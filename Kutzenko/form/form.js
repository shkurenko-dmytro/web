const FORMS = {
    cube: 'cube',
    circle: 'circle',
    triangle: 'triangle'
}

const CLASSES_BY_FORM = {
    [FORMS.cube]: 'form-cube',
    [FORMS.circle]: 'form-circle',
    [FORMS.triangle]: 'form-triangle'
}

const NEXT_FORM_BY_FORM = {
    [FORMS.cube]: FORMS.circle,
    [FORMS.circle]: FORMS.triangle,
    [FORMS.triangle]: FORMS.cube
}

let currentForm;

function switchForm(node){
    const currentClass = CLASSES_BY_FORM[currentForm];
    const nextForm = NEXT_FORM_BY_FORM[currentForm];
    const nextClass = CLASSES_BY_FORM[nextForm];

    currentForm = FORMS[nextForm];

    node.classList.replace(currentClass, nextClass);
}

function createForm(node){
    currentForm = FORMS.cube;
    node.classList.add(CLASSES_BY_FORM[currentForm]);
}

function deleteForm(node){
    node.classList.remove(CLASSES_BY_FORM[currentForm]);
}