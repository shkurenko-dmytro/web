const brand = document.querySelector('.card__brand');
const model = document.querySelector('.card__model');
const description = document.querySelector('.card__description');
const sizes = document.querySelector('.card__sizes');
const price = document.querySelector('.card__price');
const image = document.querySelector('.image-sneakers');
const blockCounter = document.querySelector('.card-block__counter');
const requestURL = "index.json"; 
const changeCard = document.querySelector('.change-card');
const changeCardButton1 = document.querySelector('.button__prev');
const changeCardButton2 = document.querySelector('.button__next');
// console.log(brand.textContent);
// console.log(model.textContent);
// console.log(description.textContent);
// console.log(sizes.textContent);
// console.log(price.textContent);

const buyButton = document.querySelector('.button-block__button');



let flag = 0;
buyButton.addEventListener('click', () => {
    
});
changeCardButton1.addEventListener('click', () => {
    console.log(flag);
    if(flag != 1){   
        let a = fetch(requestURL).then(response => response.json());
        a.then(data => {
            console.log(data);
            brand.textContent = data[flag].brand;
            model.textContent = data[flag].model;
            description.textContent = data[flag].description;
            for (let index = sizes.childElementCount; index > 0; index --) {
               (sizes.childNodes[index]).textContent  = data[flag].sizes[index];
            };
            price.textContent = data[flag].price + " $";
            console.log(image.src);
            image.src = data[flag].image;
            
            blockCounter.textContent = "0"+flag;
            
            if(flag>=1){
                changeCard.style.justifyContent = "space-between";
                changeCardButton1.style.display = "block";
            };
            if(flag < 6){
                changeCard.style.justifyContent = "space-between";
                changeCardButton2.style.display = "block";
            };
            if (flag == 1){
                changeCard.style.justifyContent = "flex-end";
                changeCardButton1.style.display = "none";
            }
        });
        flag= flag - 1; 
        
    };
});
changeCardButton2.addEventListener('click', () => {
    console.log(flag);
    if(flag != 6){
        
    let a = fetch(requestURL).then(response => response.json());
    a.then(data => {
        console.log(flag);
        console.log(data[flag]);
        brand.textContent = data[flag].brand;
        model.textContent = data[flag].model;
        description.textContent = data[flag].description;
        for (let index = 0; index < sizes.childElementCount; index ++) {
           (sizes.childNodes[index]).textContent  = data[flag].sizes[index];
        };
        price.textContent = data[flag].price + " $";
        console.log(image.src);
        image.src = data[flag].image;
        
        blockCounter.textContent = "0"+flag;
        
        if(flag>=0){
            changeCard.style.justifyContent = "space-between";
            changeCardButton1.style.display = "block";
        };
        if (flag == 6){
            changeCard.style.justifyContent = "flex-start";
            changeCardButton2.style.display = "none";
        }
    
    });
    flag = flag + 1;
    
};
});

