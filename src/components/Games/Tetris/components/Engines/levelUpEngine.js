export const checkIfLevelUp = (gameStateTetris) => {
  const levelData = document.getElementById('levelData')

  switch (gameStateTetris.lineCounter) {
    case 10:
      gameStateTetris.level = 1
      gameStateTetris.frameratePerLevel = 43
      levelData.textContent = gameStateTetris.level
      break
    case 20:
      gameStateTetris.level = 2
      gameStateTetris.frameratePerLevel = 38
      levelData.textContent = gameStateTetris.level
      break
    case 30:
      gameStateTetris.level = 3
      gameStateTetris.frameratePerLevel = 33
      levelData.textContent = gameStateTetris.level
      break
    case 40:
      gameStateTetris.level = 4
      gameStateTetris.frameratePerLevel = 28
      levelData.textContent = gameStateTetris.level
      break
    case 50:
      gameStateTetris.level = 5
      gameStateTetris.frameratePerLevel = 23
      levelData.textContent = gameStateTetris.level
      break
    case 60:
      gameStateTetris.level = 6
      gameStateTetris.frameratePerLevel = 18
      levelData.textContent = gameStateTetris.level
      break
    case 70:
      gameStateTetris.level = 7
      gameStateTetris.frameratePerLevel = 13
      levelData.textContent = gameStateTetris.level
      break
    case 80:
      gameStateTetris.level = 8
      gameStateTetris.frameratePerLevel = 8
      levelData.textContent = gameStateTetris.level
      break
    case 90:
      gameStateTetris.level = 9
      gameStateTetris.frameratePerLevel = 6
      levelData.textContent = gameStateTetris.level
      break
    case 100:
      gameStateTetris.level = 10
      gameStateTetris.frameratePerLevel = 5
      levelData.textContent = gameStateTetris.level
      break
    case 110:
      gameStateTetris.level = 11
      gameStateTetris.frameratePerLevel = 5
      levelData.textContent = gameStateTetris.level
      break
    case 120:
      gameStateTetris.level = 12
      gameStateTetris.frameratePerLevel = 5
      levelData.textContent = gameStateTetris.level
      break
    case 130:
      gameStateTetris.level = 13
      gameStateTetris.frameratePerLevel = 4
      levelData.textContent = gameStateTetris.level
      break
    case 140:
      gameStateTetris.level = 14
      gameStateTetris.frameratePerLevel = 4
      levelData.textContent = gameStateTetris.level
      break
    case 150:
      gameStateTetris.level = 15
      gameStateTetris.frameratePerLevel = 4
      levelData.textContent = gameStateTetris.level
      break
    case 160:
      gameStateTetris.level = 16
      gameStateTetris.frameratePerLevel = 3
      levelData.textContent = gameStateTetris.level
      break
    case 180:
      gameStateTetris.level = 17
      gameStateTetris.frameratePerLevel = 3
      levelData.textContent = gameStateTetris.level
      break
    case 200:
      gameStateTetris.level = 18
      gameStateTetris.frameratePerLevel = 3
      levelData.textContent = gameStateTetris.level
      break
    case 220:
      gameStateTetris.level = 19
      gameStateTetris.frameratePerLevel = 2
      levelData.textContent = gameStateTetris.level
      break
    case 240:
      gameStateTetris.level = 20
      gameStateTetris.frameratePerLevel = 2
      levelData.textContent = gameStateTetris.level
      break
    case 260:
      gameStateTetris.level = 21
      gameStateTetris.frameratePerLevel = 2
      levelData.textContent = gameStateTetris.level
      break
    case 280:
      gameStateTetris.level = 22
      gameStateTetris.frameratePerLevel = 2
      levelData.textContent = gameStateTetris.level
      break
    case 300:
      gameStateTetris.level = 23
      gameStateTetris.frameratePerLevel = 2
      levelData.textContent = gameStateTetris.level
      break
    case 320:
      gameStateTetris.level = 24
      gameStateTetris.frameratePerLevel = 2
      levelData.textContent = gameStateTetris.level
      break
    case 340:
      gameStateTetris.level = 25
      gameStateTetris.frameratePerLevel = 2
      levelData.textContent = gameStateTetris.level
      break
    case 360:
      gameStateTetris.level = 26
      gameStateTetris.frameratePerLevel = 2
      levelData.textContent = gameStateTetris.level
      break
    case 380:
      gameStateTetris.level = 27
      gameStateTetris.frameratePerLevel = 2
      levelData.textContent = gameStateTetris.level
      break
    case 400:
      gameStateTetris.level = 28
      gameStateTetris.frameratePerLevel = 2
      levelData.textContent = gameStateTetris.level
      break
    case 420:
      gameStateTetris.level = 29
      gameStateTetris.frameratePerLevel = 1
      levelData.textContent = gameStateTetris.level
      break
    default:
      break
  }
}
