!function(){"use strict";const t={Android:function(){return navigator.userAgent.match(/Android/i)},Blackberry:function(){return navigator.userAgent.match(/Blackberry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return t.Android()||t.Blackberry()||t.iOS()||t.Opera()||t.Windows()}};var n=t;const e=document.querySelector(".preloader"),d=document.querySelector(".product__container");document.querySelector(".product")&&("GET","https://tests-ipny.onrender.com/api/posts",fetch("https://tests-ipny.onrender.com/api/posts",{method:"GET"}).then((t=>t.ok?t.json():t.json().then((t=>{const n=new Error("Не працює");throw n.data=t,n}))))).then((t=>{setTimeout((function(){e.classList.contains("done")||e.classList.add("done")}),500),function(t){t.forEach((t=>{let n=`<a href="#" class="product__item">\n              <div class="product__image">\n                <img src="https://tests-ipny.onrender.com/${t.image}" onerror="this.src = './img/teslaX.png'" alt="Tesla">\n              </div>\n              <div class="product__item-body">\n                <div class="product__description-box">\n                  <dl class="product__description">\n                    <dt class="product__name">Model:</dt>\n                    <dd class="product__name-value">\n                      <h2 class="product__subtitle">Tesla ${t.model}</h2>\n                    </dd>\n                  </dl>\n                  <dl class="product__description">\n                    <dt class="product__name">Range:</dt>\n                    <dd class="product__name-value">${t.range}</dd>\n                  </dl>\n                  <dl class="product__description">\n                    <dt class="product__name">Top Speed:</dt>\n                    <dd class="product__name-value">${t.top_speed}</dd>\n                  </dl>\n                  <dl class="product__description">\n                    <dt class="product__name">Mph:</dt>\n                    <dd class="product__name-value">${t.mph}</dd>\n                  </dl>\n                </div>\n              </div>\n            </a>`;d.insertAdjacentHTML("beforeend",n)}))}(t)})).catch((t=>{console.log(t)})),n.any()?document.body.classList.add("_touch"):document.body.classList.add("_pc");const o=document.querySelector(".menu__icon"),c=document.querySelector(".menu__body");o&&o.addEventListener("click",(function(){document.body.classList.toggle("_lock"),o.classList.toggle("_active"),c.classList.toggle("_active")}))}();