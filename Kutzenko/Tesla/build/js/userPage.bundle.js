!function(){"use strict";const n={Android:function(){return navigator.userAgent.match(/Android/i)},Blackberry:function(){return navigator.userAgent.match(/Blackberry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return n.Android()||n.Blackberry()||n.iOS()||n.Opera()||n.Windows()}};var t=n;const e=document.querySelector(".preloader");document.body.onload=function(){setTimeout((function(){e.classList.contains("done")||e.classList.add("done")}),500)},t.any()?document.body.classList.add("_touch"):document.body.classList.add("_pc");const o=document.querySelector(".menu__icon"),c=document.querySelector(".menu__body");o&&o.addEventListener("click",(function(){document.body.classList.toggle("_lock"),o.classList.toggle("_active"),c.classList.toggle("_active")}))}();