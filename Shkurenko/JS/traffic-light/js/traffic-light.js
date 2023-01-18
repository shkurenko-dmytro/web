const TRAFFIC_LIGHT = document.querySelector('.js-trafficLight');
const LIGHTS = {
    red : 'red',
    yellowBeforeGreen : 'yellowBeforeGreen',
    green : 'green',
    yellowBeforeRed : 'yellowBeforeRed',

};
const ORDER_LIGHTS = {
    [LIGHTS.red] : [LIGHTS.yellowBeforeGreen],
    [LIGHTS.yellowBeforeGreen] : [LIGHTS.green],
    [LIGHTS.green] : [LIGHTS.yellowBeforeRed],
    [LIGHTS.yellowBeforeRed] : [LIGHTS.red], 
};
let color = LIGHTS.yellowBeforeRed;

const CLASSES_LIST = {
    [LIGHTS.red]: 'trafficLight_red',
    [LIGHTS.yellowBeforeGreen]:  'trafficLight_yellowBeforeGreen',
    [LIGHTS.green]: 'trafficLight_green',
    [LIGHTS.yellowBeforeRed]: 'trafficLight_yellowBeforeRed',
};

function switchColor(){
    TRAFFIC_LIGHT.classList.remove(CLASSES_LIST[color])
    color = ORDER_LIGHTS[color];
    TRAFFIC_LIGHT.classList.add(CLASSES_LIST[color]);
};

