import { appDiv } from '../../main'
import { playerStats } from '../data/variables'

//todo Prologue Creator
export const prologueCreator = (elementoPadre, actualPrologue) => {
  const prologueHTML = `
        <div class="titles">
          <h1>${actualPrologue.prologue}</h1>
        </div>
        <div id="episodeText">${actualPrologue.narrative}</div>
        <div id="choices">
          <h4 id="startButton">Comienza tu aventura</h4>
        </div>
    `
  elementoPadre.innerHTML = prologueHTML

  const startButton = document.getElementById('startButton')

  startButton.addEventListener('click', () => {
    actualPrologue.onChoice1()
    window.scrollTo({ top: 0 })
  })
}
//todo Act Creator

export const loadAct = (elementoPadre, actualAct) => {
  const actHTML = `
    <div class="titles">
        <h1>${actualAct.act}</h1>
        <h3>${actualAct.episode}</h3>
        <h5>${actualAct.part}</h5>
    </div>
    <div id="episodeText">${actualAct.narrative}</div>
    <div id="choices">
      <h4>¿Que haces?</h4>
      <p id="choice1" class="hidden">${actualAct.choice1}</p>
      <p id="choice2" class="hidden" style="animation-delay: 6s;">${actualAct.choice2}</p>
    </div>
  `
  elementoPadre.innerHTML = actHTML
  const choice1 = document.getElementById('choice1')
  const choice2 = document.getElementById('choice2')

  const moralAlignment = moralConverter(playerStats.moralStat)
  const healthAlignment = healthConverter(playerStats.health)

  //!CHOICE 1

  if (
    (!actualAct.itemNeededChoice1 ||
      playerStats.items.includes(actualAct.itemNeededChoice1)) &&
    meetsMoralRequirement(actualAct.moralNeededChoice1, moralAlignment) &&
    meetsHealthRequirement(actualAct.healthNeededChoice1, healthAlignment)
  ) {
    choice1.addEventListener('click', () => {
      playerStats.health += actualAct.healthImpactChoice1
      playerStats.moralStat += actualAct.moralImpactChoice1
      playerStats.items.push(actualAct.itemRecivedChoice1)
      playerStats.items = playerStats.items.filter(
        (item) => item !== actualAct.itemRemovedChoice1
      )
      actualAct.onChoice1()
      window.scrollTo({ top: 0 })
    })
  } else {
    choice1.classList.toggle('blocked')
  }

  //!CHOICE 2
  if (
    (!actualAct.itemNeededChoice2 ||
      playerStats.items.includes(actualAct.itemNeededChoice2)) &&
    meetsMoralRequirement(actualAct.moralNeededChoice2, moralAlignment) &&
    meetsHealthRequirement(actualAct.healthNeededChoice2, healthAlignment)
  ) {
    choice2.addEventListener('click', () => {
      playerStats.health += actualAct.healthImpactChoice2
      playerStats.moralStat += actualAct.moralImpactChoice2
      playerStats.items.push(actualAct.itemRecivedChoice2)
      playerStats.items = playerStats.items.filter(
        (item) => item !== actualAct.itemRemovedChoice2
      )
      actualAct.onChoice2()
      window.scrollTo({ top: 0 })
    })
  } else {
    choice2.classList.toggle('blocked')
  }

  //! CHOICE 3
  if (
    actualAct.onChoice3 &&
    (!actualAct.itemNeededChoice3 ||
      playerStats.items.includes(actualAct.itemNeededChoice3)) &&
    meetsMoralRequirement(actualAct.moralNeededChoice3, moralAlignment) &&
    meetsHealthRequirement(actualAct.healthNeededChoice3, healthAlignment)
  ) {
    const unlockedActionDiv = document.createElement('div')
    const unlockedAction = document.createElement('h4')
    const choice3 = document.createElement('p')

    unlockedActionDiv.id = 'unlockedActionDiv'
    unlockedActionDiv.classList.add('hidden')
    unlockedActionDiv.style.animationDelay = '4s'
    choice3.textContent = actualAct.choice3
    choice3.classList.add('hidden')
    choice3.style.animationDelay = '6s'
    unlockedAction.textContent = 'Acción Desbloqueada'

    console.log('hola')

    appDiv.appendChild(unlockedActionDiv)
    unlockedActionDiv.appendChild(unlockedAction)
    unlockedActionDiv.appendChild(choice3)

    choice3.addEventListener('click', () => {
      actualAct.onChoice3()
      window.scrollTo({ top: 0 })
    })
  }
  observerHiddenElements()
}

//todo Episode Creator

export const loadEpisode = (elementoPadre, actualEpisode) => {
  const actHTML = `
    <div class="titlesEpisode">
        <h3>${actualEpisode.episode}</h3>
        <h5>${actualEpisode.part}</h5>
    </div>
    <div id="episodeText">${actualEpisode.narrative}</div>
    <div id="choices">
      <h4>¿Que haces?</h4>
      <p id="choice1" class="hidden">${actualEpisode.choice1}</p>
      <p id="choice2" class="hidden" style="animation-delay: 6s;">${actualEpisode.choice2}</p>
    </div>
  `
  elementoPadre.innerHTML = actHTML
  const choice1 = document.getElementById('choice1')
  const choice2 = document.getElementById('choice2')

  const moralAlignment = moralConverter(playerStats.moralStat)
  const healthAlignment = healthConverter(playerStats.health)

  //!CHOICE 1

  if (
    (!actualEpisode.itemNeededChoice1 ||
      playerStats.items.includes(actualEpisode.itemNeededChoice1)) &&
    meetsMoralRequirement(actualEpisode.moralNeededChoice1, moralAlignment) &&
    meetsHealthRequirement(actualEpisode.healthNeededChoice1, healthAlignment)
  ) {
    choice1.addEventListener('click', () => {
      playerStats.health += actualEpisode.healthImpactChoice1
      playerStats.moralStat += actualEpisode.moralImpactChoice1
      playerStats.items.push(actualEpisode.itemRecivedChoice1)
      playerStats.items = playerStats.items.filter(
        (item) => item !== actualEpisode.itemRemovedChoice1
      )
      actualEpisode.onChoice1()
      window.scrollTo({ top: 0 })
    })
  } else {
    choice1.classList.toggle('blocked')
  }

  //!CHOICE 2
  if (
    (!actualEpisode.itemNeededChoice2 ||
      playerStats.items.includes(actualEpisode.itemNeededChoice2)) &&
    meetsMoralRequirement(actualEpisode.moralNeededChoice2, moralAlignment) &&
    meetsHealthRequirement(actualEpisode.healthNeededChoice2, healthAlignment)
  ) {
    choice2.addEventListener('click', () => {
      playerStats.health += actualEpisode.healthImpactChoice2
      playerStats.moralStat += actualEpisode.moralImpactChoice2
      playerStats.items.push(actualEpisode.itemRecivedChoice2)
      playerStats.items = playerStats.items.filter(
        (item) => item !== actualEpisode.itemRemovedChoice2
      )
      actualEpisode.onChoice2()
      window.scrollTo({ top: 0 })
    })
  } else {
    choice2.classList.toggle('blocked')
  }

  //! CHOICE 3
  if (
    actualEpisode.onChoice3 &&
    (!actualEpisode.itemNeededChoice3 ||
      playerStats.items.includes(actualEpisode.itemNeededChoice3)) &&
    meetsMoralRequirement(actualEpisode.moralNeededChoice3, moralAlignment) &&
    meetsHealthRequirement(actualEpisode.healthNeededChoice3, healthAlignment)
  ) {
    const unlockedActionDiv = document.createElement('div')
    const unlockedAction = document.createElement('h4')
    const choice3 = document.createElement('p')

    unlockedActionDiv.id = 'unlockedActionDiv'
    unlockedActionDiv.classList.add('hidden')
    unlockedActionDiv.style.animationDelay = '4s'
    choice3.textContent = actualEpisode.choice3
    choice3.classList.add('hidden')
    choice3.style.animationDelay = '6s'
    unlockedAction.textContent = 'Acción Desbloqueada'

    console.log('hola')

    appDiv.appendChild(unlockedActionDiv)
    unlockedActionDiv.appendChild(unlockedAction)
    unlockedActionDiv.appendChild(choice3)

    choice3.addEventListener('click', () => {
      actualEpisode.onChoice3()
      window.scrollTo({ top: 0 })
    })
  }
  observerHiddenElements()
}

//todo Moral Stat Converter

export const moralConverter = (moralStat) => {
  if (moralStat > 75) return 'saint'
  if (moralStat > 65) return 'good'
  if (moralStat > 35) return 'neutral'
  if (moralStat > 25) return 'bad'
  return 'demon'
}

//todo Health Stat Converter

export const healthConverter = (healthStat) => {
  if (healthStat > 75) return 'healthy'
  if (healthStat > 50) return 'hurt'
  if (healthStat > 25) return 'wounded'
  return 'perishing'
}

//todo Health & Moral checker

export const meetsMoralRequirement = (statNeeded, statAlignment) => {
  return (
    !statNeeded || //Esto significa que si NO(!) hay statNeeded, es decir, si el needed es null la condición se cumple.
    (Array.isArray(statNeeded) //Array.isArray verifica si es statNeeded es un array
      ? statNeeded.includes(statAlignment) // Aplicamos uso de OT* para que si es un array compruebe si incluye dentro de los stats que ya tiene el jugador alguno de los stats que estamos pidiendo.
      : statAlignment === statNeeded) // Si no es un array significa que solo estaremos pidiendo un stat y comprobaremos si es igual al que tiene el jugador.
  )
}
// *RECORDANDO OT: Operadores Ternarios: 'Condicion' ? 'que ocurre si se cumpla' : 'que ocurre si no'. EN el ejemplo anterior es: SI ES un array mira si incluye X palabra dentro del array SI NO, siplemente compara una con otra.

export const meetsHealthRequirement = (statNeeded, statAlignment) => {
  return (
    !statNeeded ||
    (Array.isArray(statNeeded)
      ? statNeeded.includes(statAlignment)
      : statAlignment === statNeeded)
  )
}

//todo INTERSECTION OBSERVER API
export const observerHiddenElements = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
      }
    })
  })
  const hiddenElements = document.querySelectorAll('.hidden')
  console.log(hiddenElements)

  hiddenElements.forEach((e) => observer.observe(e))
}

//todo DEATH SCREEN CREATOR

export const deathScreenCreator = (elementoPadre, actualDeathScene) => {
  const deathSceneHTML = `
        <div class="titles">
          <h1>${actualDeathScene.title}</h1>
        </div>
        <div id="episodeText">${actualDeathScene.narrative}</div>
        <div id="choices">
          <h4>Has muerto</h4>
          <h4 id="startButton">Volver a empezar</h4>
        </div>
    `
  elementoPadre.innerHTML = deathSceneHTML

  const startButton = document.getElementById('startButton')

  startButton.addEventListener('click', () => {
    actualDeathScene.onChoice1()
    window.scrollTo({ top: 0 })
  })
}
