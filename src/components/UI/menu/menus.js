import { menuButtonCreator } from '../button/gameButton'
import './menus.css'

export const menuCreator = (elementoPadre, menuId, menuTitle, titleId) => {
  const menu = document.createElement('div')
  menu.id = menuId
  const title = document.createElement('h3')
  title.id = titleId
  title.textContent = menuTitle
  menu.appendChild(title)
  elementoPadre.appendChild(menu)
}

export const loseMenu = (
  elementoPadre,
  loseMenuId,
  loseMenuTitle,
  enterYourNameText
) => {
  menuCreator(elementoPadre, loseMenuId, loseMenuTitle, 'loseMenuTitle')
  const loseMenu = document.getElementById(loseMenuId)
  const divLoseMenu = document.createElement('div')
  const nameInputForm = document.createElement('form')
  const nameInputLabel = document.createElement('label')
  nameInputLabel.textContent = enterYourNameText
  const nameInput = document.createElement('input')
  nameInput.id = 'nameInput'
  loseMenu.appendChild(nameInputForm)
  nameInputForm.appendChild(nameInputLabel)
  nameInputForm.appendChild(nameInput)

  nameInput.maxLength = '3'
  nameInput.addEventListener('input', () => {
    nameInput.value = nameInput.value.toUpperCase()
  })
  nameInput.placeholder = '???'

  loseMenu.appendChild(divLoseMenu)
  menuButtonCreator(divLoseMenu, 'tryAgain', 'TRY AGAIN', 'tryAgain')
  menuButtonCreator(divLoseMenu, 'goBack', 'MAIN MENU', 'goBack')
}
