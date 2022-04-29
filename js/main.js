const elDevArrow = document.querySelector('.dev')
const elModeBtn = document.querySelector('.js-mode-btn')
const elThemeColor = document.getElementById('color')

function setAnimate() {
  elDevArrow.classList.toggle('animation')
}

if(elDevArrow) {
  setInterval(() => {
    setAnimate()
  }, 5000)
}

if(elModeBtn) {
  elModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('page__body--light')
  })
}

if(elThemeColor) {
  elThemeColor.addEventListener('change', onThemeChange)
}
