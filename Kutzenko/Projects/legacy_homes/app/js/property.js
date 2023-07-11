//Змінні сторінки будинків
const propertyBlock = document.querySelector("#property-data");
const searchIcon = document.querySelector('.start__search-icon');
const searchIconProperty = document.querySelector("#property-search");
const selectedData = Array.from(document.querySelectorAll('.start__search-input'));

//Змінні головної сторінки
const homeSelectedData = Array.from(document.querySelectorAll('.home-select'));
const homeSearchIcon = document.querySelector('#home__search-icon');

//Робота з головної сторінкою
if(homeSearchIcon){
  //Занесення в пошук даних з localStorage
  window.addEventListener('load', () => {
    const homeSelectedValues = localStorage.getItem('homeSelectedValue').split(',');

    for(let i = 0; i < homeSelectedValues.length; i++){
      selectedData[i].value = homeSelectedValues[i];
    }
  });

  //Занесення даних пошуку в localStorage
  homeSearchIcon.addEventListener('click', function(){
    //Взяття значень з select
    const homeSelectedValue = homeSelectedData.map(item => {
      return item.value;
    })

    localStorage.setItem('homeSelectedValue', homeSelectedValue);
  })
}

//Робота зі сторінкою будинків
const jsonResponse = fetch('./json/data.json').then((response) => response.json());

if (propertyBlock) {
  jsonResponse.then(data => {
    //Занесення в пошук даних з localStorage
    const homeSelectedValues = localStorage.getItem('homeSelectedValue').split(',');

    for(let i = 0; i < homeSelectedValues.length; i++){
      selectedData[i].value = homeSelectedValues[i];
    }

    addItems(data);

    searchIcon.addEventListener('click', () => { addItems(data); });

    //Додання будинків до HTML
    function addItems(data){
      propertyBlock.innerHTML = '';

      //Фільтр на конкретні значення
      const filterSelectedData = selectedData.filter((element) => {
        return element.value != "All";
      });

      //Робота з кожним об'єктом з JSON
      data.forEach((element) => {
        //Звіряння даних пошуку з даними будинків з JSON
        let result = filterSelectedData.every((item) => {
          return item.value === element.terms || item.value === element.status || item.value === element.furnished || item.value === element.location;
        })
        
        //Внесення HTML з даними JSON
        if(result === true){
          let itemHTML = `<div class="property__item">
            <div class="property__item-image">
              <img class="ibg" src=${element.image} alt="">
            </div>
            <div class="property__item-body">
              <h4 class="property__item-title">
                ${element.title}
              </h4>
              <address class="property__item-address">
                ${element.address}
              </address>
              <b class="property__item-price">
                ${element.price}
              </b>
              <div class="property__item-info-block">
                <dl class="property__item-info">
                  <dt class="property__item-name">Area (sqft)</dt>
                  <dd class="property__item-description">${element.area}</dd>
                </dl>
                <dl class="property__item-info">
                  <dt class="property__item-name">Bedrooms</dt>
                  <dd class="property__item-description">${element.bedrooms}</dd>
                </dl>
                <dl class="property__item-info">
                  <dt class="property__item-name">Bathrooms</dt>
                  <dd class="property__item-description">${element.bathrooms}</dd>
                </dl>
              </div>
              <a href="#" class="property__item-button button">
                view details
              </a>
            </div>
          </div>`;

          propertyBlock.insertAdjacentHTML('beforeend', itemHTML);
        };
      });
    }
  })
}