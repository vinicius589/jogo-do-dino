const dino = document.querySelector('.dino')
const cactus = document.querySelector('.cactus')

const start = document.querySelector('.start')
const gameOver = document.querySelector('.game-over')

const startGame = () => {
  cactus.classList.add('cactus-animation')
  start.style.display = 'none'

}

const restartGame = () => {
  gameOver.style.display = 'none'
  cactus.style.left = ''
  cactus.style.right = '0'
  dino.src = 'img/dino.gif'
  dino.style.width = '180px'
  dino.style.bottom = '0'

  start.style.display = 'none'

}

const jump = () => {
  dino.classList.add('jump')

  setTimeout(() => {
    dino.classList.remove('jump')
  }, 800)
}

const loop = () => {
  setInterval(() => {
    const cactusPosition = cactus.offsetLeft
    const dinoPosition = window
      .getComputedStyle(dino)
      .bottom.replace('px', ' ')

    if (cactusPosition <= 120 && cactusPosition > 0 && dinoPosition < 80) {
      cactus.classList.remove('.cactus-animation')
      cactus.style.left = `${cactusPosition}px`

      dino.classList.remove('.jump')
      dino.style.bottom = `${dinoPosition}px`

      dino.src = 'img/game-over.png'
      dino.style.width = '180px'
      dino.style.marginLeft = '50px'
      
      gameOver.style.display = 'flex'
      
      clearInterval(loop)
    }
  }, 10)
}

loop()

document.addEventListener('keypress', e => {
  const tecla = e.key
  if (tecla === ' ') {
    jump()
  }
})

document.addEventListener('touchstart', e => {
  if (e.touches.length) {
    jump() 
  }
})

document.addEventListener('keypress', e => {
  const tecla = e.key
  if (tecla === 'Enter') {
    startGame()
  }
})