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
const slider = document.querySelector('.switch__theme');
const body = document.querySelector('body');
const themesElements = document.querySelectorAll('.dark__theme');
const nike = document.querySelector('.nikeWhite');
const buyButton = document.querySelector('.button-block__button');
// console.log(brand.textContent);
// console.log(model.textContent);
// console.log(description.textContent);
// console.log(sizes.textContent);
// console.log(price.textContent);
// console.log(image.src);

console.log(themesElements);
slider.addEventListener('click', () => {
    if(slider.checked){
        body.classList.replace('dark__theme','white__theme');
        for (let index = 0; index < themesElements.length; index++) {
            themesElements[index].classList.replace('dark__theme','white__theme');
        };
        nike.src = "./images/nikeDark.svg";
        buyButton.style.backgroundColor = "#121212";
        buyButton.style.color = "#fff";
        document.querySelector('.label-span').textContent = "WHITE";
        document.querySelector('.icon1').src = "./images/90.svg"
        document.querySelector('.icon2').src = "./images/Group3.svg"
        document.querySelector('.icon3').src = "./images/корзина.svg"
        document.querySelector('.img__prev').src = "./images/VectorPrev.svg"
        document.querySelector('.img__next').src = "./images/VectorNext.svg"
        changeCardButton1.style.backgroundColor = "#fff";
        changeCardButton2.style.backgroundColor = "#fff";
    }
    else{
        body.classList.replace('white__theme','dark__theme');
        for (let index = 0; index < themesElements.length; index++) {
            themesElements[index].classList.replace('white__theme','dark__theme');
        };
        nike.src = "./images/nike.svg";
        buyButton.style.backgroundColor = "#fff";
        buyButton.style.color = "#121212";
        document.querySelector('.label-span').textContent = "BLACK";
        document.querySelector('.icon1').src = "./images/Vector (3).png"
        document.querySelector('.icon2').src = "./images/Group 3.png"
        document.querySelector('.icon3').src = "./images/корзина.png"
        document.querySelector('.img__prev').src = "./images/Vector1.svg"
        document.querySelector('.img__next').src = "./images/Vector2.svg"
        changeCardButton1.style.backgroundColor = "#121212";
        changeCardButton2.style.backgroundColor = "#121212";
        
    }
    
});



let flag = 1;
function render(){
    flag = 1;
    let a = fetch(requestURL).then(response => response.json());
        a.then(data => {
            brand.textContent = data[flag].brand;
            model.textContent = data[flag].model;
            description.textContent = data[flag].description;
            // for (let index = 0 ; index < sizes.childElementCount; index ++) {
            //     (sizes.childNodes[index]).textContent  = data[flag].sizes[index];
            // };
            price.textContent = data[flag].price + "$";
            image.src = data[flag].image;

            blockCounter.textContent = "0"+flag;
        });
};


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
        price.textContent = data[flag].price + "$";
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

render();

