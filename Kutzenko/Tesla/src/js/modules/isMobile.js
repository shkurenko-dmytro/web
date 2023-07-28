const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i)
  },
  Blackberry: function () {
    return navigator.userAgent.match(/Blackberry/i)
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i)
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i)
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i)
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.Blackberry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    )
  },
}

function addDeviceClass() {
  if (isMobile.any()) {
    document.body.classList.add("_touch")
  } else {
    document.body.classList.add("_pc")
  }
}

export default addDeviceClass
