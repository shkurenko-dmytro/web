const LIGHTS = {
    red: 'red',
    yellow: 'yellow',
    green: 'green',
}

const CLASSES_BY_LIGHT = {
    [LIGHTS.red]: 'traffic-light-red',
    [LIGHTS.yellow]: 'traffic-light-yellow',
    [LIGHTS.green]: 'traffic-light-green',
}

const NEXT_LIGHT_BY_LIGHT = {
    [LIGHTS.red]: LIGHTS.green,
    [LIGHTS.green]: LIGHTS.yellow,
    [LIGHTS.yellow]: LIGHTS.red,
}

let currentLight = LIGHTS.red;

function switchLight(node) {
    const currentClass = CLASSES_BY_LIGHT[currentLight];
    const nextLight = NEXT_LIGHT_BY_LIGHT[currentLight];
    const nextClass = CLASSES_BY_LIGHT[nextLight];

    currentLight = NEXT_LIGHT_BY_LIGHT[currentLight];

    node.classList.replace(currentClass, nextClass);
}

function initLight(node){
    node.classList.add(CLASSES_BY_LIGHT[currentLight]);
}