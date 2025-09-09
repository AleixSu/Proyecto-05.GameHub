import { loadAct } from '../functions/functions'

export const actII = {
  narrative: `
<p>Hola, que más!</p>
`,
  choice1: 'salto',
  choice2: 'nado',

  onChoice1: () => {
    loadAct()
  },
  healthNeededChoice1: null,
  moralNeededChoice1: null,
  itemNeededChoice1: null,

  healthImpactChoice1: 0,
  moralImpactChoice1: 0,
  itemRecivedChoice1: null,
  itemRemovedChoice1: null,

  onCoice2: () => {
    loadAct()
  },

  healthNeededChoice2: null,
  moralNeededChoice2: null,
  itemNeededChoice2: null,

  healthImpactChoice2: 0,
  moralImpactChoice2: 0,
  itemRecivedChoice2: null,
  itemRemovedChoice2: null,

  onChoice3: null /* () => {
    loadAct(appDiv, actII)
  },

  healthNeededChoice3: null,
  moralNeededChoice3: null,
  itemNeededChoice3: null,

  healthImpactChoice3: 0,
  moralImpactChoice3: 0,
  itemRecivedChoice3: null,
  itemRemovedChoice3: null, */,

  backgroundPicture: '',
  backgroundSong: ''
}
