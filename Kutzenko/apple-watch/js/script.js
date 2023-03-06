let mySlider = new Swiper('.my-swiper', {
  //Стрілки
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev'
  },
  // Прогресбар
  pagination: {
    el: '.swiper-pagination',
    // Буллети
    clickable: true,
  },
  keyboard: {
    enabled: true,
  },
});

//Додання слайдів
mySlider.appendSlide([
  `<div class="swiper-slide">
    <div class="my-swiper__body">
      <div class="my-swiper__text">
        <p class="my-swiper__paragraph">
          <span>Perfect Moment</span> Between Past And Future.
        </p>
        <a href="#" class="my-swiper__button">Buy Now</a>
      </div>
      <div class="my-swiper__watch-box">
        <div class="my-swiper__watch">
          <img class="ibg" src="./img/page-body/black-big.png" alt="">
        </div>
        <div class="my-swiper__background black"></div>
      </div>
    </div>
  </div>`,
  `<div class="swiper-slide">
    <div class="my-swiper__body">
      <div class="my-swiper__text">
        <p class="my-swiper__paragraph">
          <span>Perfect Moment</span> Between Past And Future.
        </p>
        <a href="#" class="my-swiper__button">Buy Now</a>
      </div>
      <div class="my-swiper__watch-box">
        <div class="my-swiper__watch">
          <img class="ibg" src="./img/page-body/blue-big.png" alt="">
        </div>
        <div class="my-swiper__background blue"></div>
      </div>
    </div>
  </div>`,
  `<div class="swiper-slide">
    <div class="my-swiper__body">
      <div class="my-swiper__text">
        <p class="my-swiper__paragraph">
          <span>Perfect Moment</span> Between Past And Future.
        </p>
        <a href="#" class="my-swiper__button">Buy Now</a>
      </div>
      <div class="my-swiper__watch-box">
        <div class="my-swiper__watch">
          <img class="ibg" src="./img/page-body/green-big.png" alt="">
        </div>
        <div class="my-swiper__background green"></div>
      </div>
    </div>
  </div>`,
  `<div class="swiper-slide">
    <div class="my-swiper__body">
      <div class="my-swiper__text">
        <p class="my-swiper__paragraph">
          <span>Perfect Moment</span> Between Past And Future.
        </p>
        <a href="#" class="my-swiper__button">Buy Now</a>
      </div>
      <div class="my-swiper__watch-box">
        <div class="my-swiper__watch">
          <img class="ibg" src="./img/page-body/pink-big.png" alt="">
        </div>
        <div class="my-swiper__background pink"></div>
      </div>
    </div>
  </div>`
])

//Поточний слайд
let slideCount = document.querySelector('.my-swiper__number');
mySlider.on('slideChange', function(){
  let currentSlide = ++mySlider.realIndex;
  slideCount.innerText = currentSlide;
})

//Зміна кольорів при зміні слайду
const COLORS = {
  black: '#404356',
  blue: '#C0D5E0',
  green: '#78DCD0',
  pink: '#F0C7C1'
}

let pageNode = document.querySelector('.page');
let activeLinkHeader = document.querySelector('.active-link');

let fbLinkNode = document.querySelector('.panel__facebook');
let instLinkNode = document.querySelector('.panel__instagram');
let twitterLinkNode = document.querySelector('.panel__twitter');

let iconPanelNode = document.querySelector('.panel__icon');

mySlider.on('slideChange', function(){
  switch (mySlider.realIndex){
    case 1:
      pageNode.style.background = `linear-gradient(89.83deg, ${COLORS.black} 0.17%, rgba(192, 213, 224, 0) 165.01%)`;
      activeLinkHeader.style.color = COLORS.black;

      fbLinkNode.style.fill = COLORS.black;
      instLinkNode.style.fill = COLORS.black;
      twitterLinkNode.style.fill = COLORS.black;

      iconPanelNode.style.setProperty('--panel-icon-color', COLORS.black);
      break;
    case 2:
      pageNode.style.background = `linear-gradient(89.83deg, ${COLORS.blue} 0.17%, rgba(192, 213, 224, 0) 165.01%)`;
      activeLinkHeader.style.color = COLORS.blue;

      fbLinkNode.style.fill = COLORS.blue;
      instLinkNode.style.fill = COLORS.blue;
      twitterLinkNode.style.fill = COLORS.blue;

      iconPanelNode.style.setProperty('--panel-icon-color', COLORS.blue);
      break;
    case 3:
      pageNode.style.background = `linear-gradient(89.83deg, ${COLORS.green} 0.17%, rgba(192, 213, 224, 0) 165.01%)`;
      activeLinkHeader.style.color = COLORS.green;

      fbLinkNode.style.fill = COLORS.green;
      instLinkNode.style.fill = COLORS.green;
      twitterLinkNode.style.fill = COLORS.green;

      iconPanelNode.style.setProperty('--panel-icon-color', COLORS.green);
      break;
    case 4:
      pageNode.style.background = `linear-gradient(89.83deg, ${COLORS.pink} 0.17%, rgba(192, 213, 224, 0) 165.01%)`;
      activeLinkHeader.style.color = COLORS.pink;

      fbLinkNode.style.fill = COLORS.pink;
      instLinkNode.style.fill = COLORS.pink;
      twitterLinkNode.style.fill = COLORS.pink;

      iconPanelNode.style.setProperty('--panel-icon-color', COLORS.pink);
      break;
    default:
      break
  }
})