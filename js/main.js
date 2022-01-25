const elDevArrow = document.querySelector('.dev')

function setAnimate() {
  elDevArrow.classList.toggle('animation')
}

if(elDevArrow) {
  setInterval(() => {
    setAnimate()
  }, 5000)
}
