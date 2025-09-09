import './gameButton.css'

export const buttonSelectorCreator = (
  elementoPadre,
  divToErase1,
  divToErase2,
  color,
  openGame,
  closeGame,
  img
) => {
  const gameSelector = document.createElement('button')
  gameSelector.className = 'gameSelectorButton'
  const buttonImg = document.createElement('img')
  buttonImg.src = img
  gameSelector.appendChild(buttonImg)
  gameSelector.style.backgroundColor = color

  elementoPadre.appendChild(gameSelector)

  gameSelector.addEventListener('click', () => {
    openGame.classList.toggle('hidden')
    closeGame.classList.toggle('hidden')
    setTimeout(() => {
      divToErase1.classList.toggle('displayNone')
      divToErase2.classList.toggle('displayNone')
    }, 1000)
  })
}

export const menuButtonCreator = (elementoPadre, className, text, id) => {
  const menuButton = document.createElement('button')
  menuButton.className = className
  menuButton.textContent = text
  menuButton.id = id
  elementoPadre.appendChild(menuButton)
}
