const iconMenu = document.querySelector(".menu__icon")
const menuBody = document.querySelector(".menu__body")
const linksList = Array.from(document.querySelectorAll(".menu__list-link"))

function addMenuClass() {
  if (iconMenu) {
    iconMenu.addEventListener("click", function () {
      document.body.classList.toggle("_lock")
      iconMenu.classList.toggle("_active")
      menuBody.classList.toggle("_active")
    })
  }

  //Active page
  linksList.forEach((link) => {
    link.classList.remove("active-link")
    console.log(document.location.href)
    if (document.location.href === link.href) {
      link.classList.add("active-link")
    }
  })
}

export default addMenuClass
