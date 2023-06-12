const propertyBlock = document.querySelector("#property-data");

const searchIcon = document.querySelector('.start__search-icon');
const searchIconProperty = document.querySelector("#property-search");

// const propertyType = document.querySelector("[name='propertyType']");
// const propertyStatus = document.querySelector("[name='propertyStatus']");
// const typeOption = document.querySelector("[name='type']");
// const locationOption = document.querySelector("[name='location']");

const selectedData = document.querySelectorAll('.start__search-input');

const jsonResponse = fetch('./json/data.json').then((response) => response.json());

<<<<<<< HEAD
jsonResponse.then(data => {
  data.forEach(element => {
    console.log(element);
    
  });
})
=======
if (propertyBlock) {
  jsonResponse.then(data => {
    searchIcon.addEventListener('click', function () {
      propertyBlock.innerHTML = '';

      const filterSelectedData = Array.from(selectedData).filter((element) => {
        return element.value != "";
      });

      if(filterSelectedData.length > 0){
        data.forEach((element) => {
          let result = filterSelectedData.every((item) => {
            return item.value == element.terms || item.value == element.status || item.value == element.furnished || item.value == element.location;
          })
          
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
  })
}
>>>>>>> 17ff8240ca663dd291d5eabfe2e5f2ac219a14be
