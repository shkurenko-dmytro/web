!function(){"use strict";const e={Android:function(){return navigator.userAgent.match(/Android/i)},Blackberry:function(){return navigator.userAgent.match(/Blackberry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return e.Android()||e.Blackberry()||e.iOS()||e.Opera()||e.Windows()}};const t=document.querySelector(".menu__icon"),n=document.querySelector(".menu__body");var o="http://localhost:5000/auth/registration";const r=document.querySelector(".preloader");if(document.body.onload=function(){setTimeout((function(){r.classList.contains("done")||r.classList.add("done")}),500)},document.querySelector(".form")){const s=document.querySelector(".container-form"),a=document.querySelector(".form__login"),c=document.querySelector(".form__sign-up"),l=document.querySelector("#username"),i=document.querySelector("#password"),d=document.querySelector("#username-error"),u=document.querySelector("#password-error"),y=document.querySelector("#username-signUp"),m=document.querySelector("#password-signUp"),p=document.querySelector("#confirm-password"),g=document.querySelector("#username-signUp-error"),f=document.querySelector("#password-signUp-error"),v=document.querySelector("#confirm-password-error"),L=document.querySelector("#link-to-signUp"),S=document.querySelector("#link-to-login");function b(e,t,n,o,r=null,s=null){return e.value.length<4?(e.style.borderColor="red",n.style.display="block",e.focus(),!1):t.value.length<4?(t.style.borderColor="red",o.style.display="block",t.focus(),!1):!r||r.value===t.value||(r.style.borderColor="red",s.style.display="block",r.focus(),!1)}function h(e){if(e.target.value.length>=4)return e.target.style.borderColor="gray",d.style.display="none",g.style.display="none",!0}function q(e){if(e.target.value.length>=4)return e.target.style.borderColor="gray",u.style.display="none",f.style.display="none",!0}function _(e){if(e.target.value===m.value)return e.target.style.borderColor="gray",v.style.display="none",!0}function k(e,t,n=null){return fetch(t,{method:e,body:n}).then((e=>e.ok?e.json():e.json().then((e=>{const t=new Error("Не працює");throw t.data=e,t}))))}l.addEventListener("input",h),i.addEventListener("input",q),y.addEventListener("input",h),m.addEventListener("input",q),p.addEventListener("input",_),L.addEventListener("click",(e=>{e.preventDefault(),s.classList.add("active")})),S.addEventListener("click",(e=>{e.preventDefault(),s.classList.remove("active")})),a.addEventListener("submit",(e=>{if(e.preventDefault(),!b(l,i,d,u))return!1;{let e=new FormData;e.append("username",l.value),e.append("password",i.value),r.classList.contains("done")&&r.classList.remove("done"),k("POST",o,e).then((e=>{setTimeout((function(){r.classList.contains("done")||r.classList.add("done")}),100),console.log(e),s.style.display="none",document.querySelector(".account__login-text").style.display="block"})).catch((e=>{setTimeout((function(){r.classList.contains("done")||r.classList.add("done")}),100),alert("Adding User failed"),console.log(e)}))}})),c.addEventListener("submit",(e=>{if(e.preventDefault(),!b(y,m,g,f,p,v))return!1;{let e=new FormData;e.append("username",y.value),e.append("password",m.value),r.classList.contains("done")&&r.classList.remove("done"),k("POST",o,e).then((e=>{setTimeout((function(){r.classList.contains("done")||r.classList.add("done")}),100),console.log(e),s.style.display="none",document.querySelector(".account__signup-text").style.display="block"})).catch((e=>{setTimeout((function(){r.classList.contains("done")||r.classList.add("done")}),100),alert("Adding User failed"),console.log(e)}))}}))}e.any()?document.body.classList.add("_touch"):document.body.classList.add("_pc"),t&&t.addEventListener("click",(function(){document.body.classList.toggle("_lock"),t.classList.toggle("_active"),n.classList.toggle("_active")}))}();