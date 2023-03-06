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

//Поточний слайд
let slideCount = document.querySelector('.my-swiper__number');
mySlider.on('slideChange', function(){
  let currentSlide = ++mySlider.realIndex;
  slideCount.innerText = currentSlide;
})

//Зміна кольорів при зміні слайду
let pageNode = document.querySelector('.page');
let activeLinkHeader = document.querySelector('.active-link');

let fbLinkNode = document.querySelector('.panel__facebook');
let instLinkNode = document.querySelector('.panel__instagram');
let twitterLinkNode = document.querySelector('.panel__twitter');

mySlider.on('slideChange', function(){
  switch (mySlider.realIndex){
    case 1:
      pageNode.style.background = 'linear-gradient(89.83deg, #404356 0.17%, rgba(192, 213, 224, 0) 165.01%)';
      activeLinkHeader.style.color = 'rgba(66, 69, 88, 1)';

      fbLinkNode.style.fill = '#4B4F61';
      instLinkNode.style.fill = '#4B4F61';
      twitterLinkNode.style.fill = '#4B4F61';
      break;
    case 2:
      pageNode.style.background = 'linear-gradient(89.83deg, #C0D5E0 0.17%, rgba(192, 213, 224, 0) 165.01%)';
      activeLinkHeader.style.color = 'rgba(198, 219, 229, 1)';

      fbLinkNode.style.fill = '#B6CCDA';
      instLinkNode.style.fill = '#B6CCDA';
      twitterLinkNode.style.fill = '#B6CCDA';
      break;
    case 3:
      pageNode.style.background = 'linear-gradient(89.83deg, #78DCD0 0.17%, rgba(192, 213, 224, 0) 165.01%)';
      activeLinkHeader.style.color = 'rgba(121, 220, 208, 1)';

      fbLinkNode.style.fill = '#7ADCD1';
      instLinkNode.style.fill = '#7ADCD1';
      twitterLinkNode.style.fill = '#7ADCD1';
      break;
    case 4:
      pageNode.style.background = 'linear-gradient(89.83deg, #F0C7C1 0.17%, rgba(192, 213, 224, 0) 165.01%)';
      activeLinkHeader.style.color = 'rgba(240, 199, 193, 1)';

      fbLinkNode.style.fill = '#F0C7C1';
      instLinkNode.style.fill = '#F0C7C1';
      twitterLinkNode.style.fill = '#F0C7C1';
      break;
    default:
      break
  }
})