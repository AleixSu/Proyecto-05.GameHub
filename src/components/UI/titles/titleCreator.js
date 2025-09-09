export const titleCreator = (elementoPadre, hx, size, className, text) => {
  const gameTitle = document.createElement(hx)
  gameTitle.classList.add('standardTitle')
  gameTitle.classList.add(className)
  gameTitle.textContent = text
  gameTitle.style.fontsize = size
  gameTitle.style.backgroundColor = 'transparent'
  elementoPadre.appendChild(gameTitle)
}
