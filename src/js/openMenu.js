let btnMenu = document.querySelector('.burger')
let btnClose = document.querySelector('.burger-close')
let menuHiden = document.querySelector('.sidebar-menu_hiden')
let hidenHeader = document.querySelector('.header')
let flexbox2 = document.querySelector('.flex-box2')
let flexbox1 = document.querySelector('.flex-box1')
let openCallback = document.querySelector('.open-callback')
let openFeedback = document.querySelector('.open-feedback')
let width = window.outerWidth

window.addEventListener('resize', function () {
  let sidebarActive =
    openCallback.classList.contains('hidden') &&
    openFeedback.classList.contains('hidden')

  if (window.outerWidth < 768 && !sidebarActive) {
    flexbox2.classList.add('hidden')
  } else if (window.outerWidth > 1365) {
    btnClose.classList.add('hidden')
  } else if (window.outerWidth < 1365) {
    btnClose.classList.remove('hidden')
  }
})

btnMenu.addEventListener('click', function () {
  menuHiden.classList.remove('sidebar-menu_hiden')
  hidenHeader.classList.add('hidden')
  if (window.outerWidth < 768) {
    flexbox2.classList.add('hidden')
  } else {
    flexbox2.style.opacity = '0.05'
  }
})

btnClose.addEventListener('click', function () {
  menuHiden.classList.add('sidebar-menu_hiden')
  hidenHeader.classList.remove('hidden')
  flexbox2.classList.remove('hidden')
  flexbox2.style.opacity = '1'
})

flexbox2.addEventListener('click', function () {
  menuHiden.classList.add('sidebar-menu_hiden')
  hidenHeader.classList.remove('hidden')
  flexbox2.classList.remove('hidden')
  flexbox2.style.opacity = '1'
  openCallback.classList.add('hidden')
  openCallback.classList.remove('vision-absolute')
})
