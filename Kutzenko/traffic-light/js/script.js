const btn = document.querySelector('.js-btn');
const trafficLight = document.querySelector('.js-traffic-light');

initLight(trafficLight);

btn.addEventListener('click', function(){
    switchLight(trafficLight);
})