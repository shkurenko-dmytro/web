!function(){"use strict";const e={Android:function(){return navigator.userAgent.match(/Android/i)},Blackberry:function(){return navigator.userAgent.match(/Blackberry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return e.Android()||e.Blackberry()||e.iOS()||e.Opera()||e.Windows()}};var t=e,n="https://my-json-server.typicode.com/typicode/demo/posts";const o=document.querySelector(".preloader");if(document.body.onload=function(){setTimeout((function(){o.classList.contains("done")||o.classList.add("done")}),500)},document.querySelector(".form")){const c=document.querySelector(".container-form"),a=document.querySelector(".form__login"),l=document.querySelector(".form__sign-up"),i=document.querySelector("#username"),d=document.querySelector("#password"),u=document.querySelector("#username-error"),y=document.querySelector("#password-error"),m=document.querySelector("#username-signUp"),p=document.querySelector("#password-signUp"),g=document.querySelector("#confirm-password"),f=document.querySelector("#username-signUp-error"),v=document.querySelector("#password-signUp-error"),L=document.querySelector("#confirm-password-error"),S=document.querySelector("#link-to-signUp"),b=document.querySelector("#link-to-login");function h(e,t,n,o,r=null,s=null){return e.value.length<4?(e.style.borderColor="red",n.style.display="block",e.focus(),!1):t.value.length<4?(t.style.borderColor="red",o.style.display="block",t.focus(),!1):!r||r.value===t.value||(r.style.borderColor="red",s.style.display="block",r.focus(),!1)}function q(e){if(e.target.value.length>=4)return e.target.style.borderColor="gray",u.style.display="none",f.style.display="none",!0}function _(e){if(e.target.value.length>=4)return e.target.style.borderColor="gray",y.style.display="none",v.style.display="none",!0}function k(e){if(e.target.value===p.value)return e.target.style.borderColor="gray",L.style.display="none",!0}function w(e,t,n=null){return fetch(t,{method:e,body:n}).then((e=>e.ok?e.json():e.json().then((e=>{const t=new Error("Не працює");throw t.data=e,t}))))}i.addEventListener("input",q),d.addEventListener("input",_),m.addEventListener("input",q),p.addEventListener("input",_),g.addEventListener("input",k),S.addEventListener("click",(e=>{e.preventDefault(),c.classList.add("active")})),b.addEventListener("click",(e=>{e.preventDefault(),c.classList.remove("active")})),a.addEventListener("submit",(e=>{if(e.preventDefault(),!h(i,d,u,y))return!1;{let e=new FormData;e.append("username",i.value),e.append("password",d.value),o.classList.contains("done")&&o.classList.remove("done"),w("POST",n,e).then((e=>{setTimeout((function(){o.classList.contains("done")||o.classList.add("done")}),100),console.log(e),c.style.display="none",document.querySelector(".account__login-text").style.display="block"})).catch((e=>{setTimeout((function(){o.classList.contains("done")||o.classList.add("done")}),100),alert("Adding User failed"),console.log(e)}))}})),l.addEventListener("submit",(e=>{if(e.preventDefault(),!h(m,p,f,v,g,L))return!1;{let e=new FormData;e.append("username",m.value),e.append("password",p.value),o.classList.contains("done")&&o.classList.remove("done"),w("POST",n,e).then((e=>{setTimeout((function(){o.classList.contains("done")||o.classList.add("done")}),100),console.log(e),c.style.display="none",document.querySelector(".account__signup-text").style.display="block"})).catch((e=>{setTimeout((function(){o.classList.contains("done")||o.classList.add("done")}),100),alert("Adding User failed"),console.log(e)}))}}))}t.any()?document.body.classList.add("_touch"):document.body.classList.add("_pc");const r=document.querySelector(".menu__icon"),s=document.querySelector(".menu__body");r&&r.addEventListener("click",(function(){document.body.classList.toggle("_lock"),r.classList.toggle("_active"),s.classList.toggle("_active")}))}();