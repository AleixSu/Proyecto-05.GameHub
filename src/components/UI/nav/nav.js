export const navCreator = (elementoPadre, className) => {
  const gameNav = document.createElement('nav')
  gameNav.classList.add(className)
  elementoPadre.appendChild(gameNav)
}
