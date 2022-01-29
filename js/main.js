const elDevArrow = document.querySelector('.dev')
const elModeBtn = document.querySelector('.js-mode-btn')

const btnDesc = {
  dark: 'Click me)',
  light: 'Thank you)'
}

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
    if(document.body.matches('.page__body--light')) {
      elModeBtn.textContent = btnDesc.light
    } else {
      elModeBtn.textContent = btnDesc.dark
    }
  })
}
