const elDevArrow = document.querySelector('.dev')
const elModeBtn = document.querySelector('.js-mode-btn')
const elThemeColor = document.getElementById('color')

function setAnimate() {
  elDevArrow.classList.toggle('animation')
}

function onThemeChange() {
  let shadowColor = elThemeColor.value.split('')
  shadowColor = shadowColor.map((color, i) => i % 2 ? color = '5' : color = color)
  shadowColor = shadowColor.join('')

  document.documentElement.style.setProperty('--light-color', elThemeColor.value)
  document.documentElement.style.setProperty('--dark-color', elThemeColor.value)
  document.documentElement.style.setProperty('--dark-shadow', shadowColor)
  document.documentElement.style.setProperty('--light-shadow', shadowColor)
  document.documentElement.style.setProperty('--lighter-shadow', shadowColor)
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
