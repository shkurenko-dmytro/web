!function(){"use strict";const e={Android:function(){return navigator.userAgent.match(/Android/i)},Blackberry:function(){return navigator.userAgent.match(/Blackberry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return e.Android()||e.Blackberry()||e.iOS()||e.Opera()||e.Windows()}};const t=document.querySelector(".menu__icon"),n=document.querySelector(".menu__body"),o=Array.from(document.querySelectorAll(".menu__list-link"));const c=document.querySelector(".preloader"),r=document.querySelector(".logout"),i=document.getElementById("username");document.body.onload=function(){setTimeout((function(){c.classList.contains("done")||c.classList.add("done")}),500)};let a=JSON.parse(localStorage.getItem("username"));i.innerHTML=`<span>User: </span>${a}`,r.addEventListener("click",(function(){localStorage.clear()})),e.any()?document.body.classList.add("_touch"):document.body.classList.add("_pc"),t&&t.addEventListener("click",(function(){document.body.classList.toggle("_lock"),t.classList.toggle("_active"),n.classList.toggle("_active")})),o.forEach((e=>{e.classList.remove("active-link"),console.log(document.location.href),document.location.href===e.href&&e.classList.add("active-link")}))}();