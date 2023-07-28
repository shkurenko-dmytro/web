"use strict"

import addDeviceClass from "./modules/isMobile"
import addMenuClass from "./modules/menu"

const preloader = document.querySelector(".preloader")

const logout = document.querySelector(".logout")
const username = document.getElementById("username")

//Preloader
document.body.onload = function () {
  setTimeout(function () {
    if (!preloader.classList.contains("done")) {
      preloader.classList.add("done")
    }
  }, 500)
}

//LocalStorage
let user = JSON.parse(localStorage.getItem("username"))

username.innerHTML = `<span>User: </span>${user}`

//Log out
logout.addEventListener("click", function () {
  localStorage.clear()
})

// Which device
addDeviceClass()

//Menu
addMenuClass()
