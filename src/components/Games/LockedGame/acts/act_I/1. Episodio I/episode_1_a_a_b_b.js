import { appDiv } from '../../../../main'
import { loadEpisode } from '../../../functions/functions'

export const episode_1_a_a_b_b = {
  id: 1.122,
  act: null,
  episode: 'Episodio primero: Las Cenizas del Recuerdo',
  part: 'Parte IV',
  narrative: `
<p>Te agachas frente a él. Tu mirada no muestra rabia, solo desprecio. No levantas la voz. No hace falta.</p>

<p>—Sois una panda de sabandijas miserables. Ratas armadas. Ni hombres, ni soldados… basura. Robáis, matáis, violáis, como hienas hambrientas y cobardes. ¿Te crees duro por llevar un arma? Solo eres otro cobarde que se esconde entre árboles para atacar a inocentes por la espalda.</p>

<p>Te inclinas más, casi susurrando.</p>

<p>—Mírate. Tirado como un perro sarnoso, revolcándote en tus propios gritos. Cada paso que diste te trajo hasta aquí. Cada crimen. Cada decisión. Y ahora te mueres, solo, asustado, cubierto de mierda y sangre. Exactamente como mereces.</p>

<p>Haces una pausa. Dejas que trague saliva. Que se ahogue en su propia angustia.</p>

<p>—Tu único consuelo soy yo. Y depende de ti si acabo con esto rápido… o si te dejo pudrirte aquí, llorando como el insecto que eres.</p>
  `,

  choice1: '<strong>Sigues torturándolo.</strong> ',
  choice2: '<strong>Lo matas y te marchas ya.</strong>',
  choice3: '',

  onChoice1: () => {
    loadEpisode(appDiv)
  },
  healthNeededChoice1: null,
  moralNeededChoice1: null,
  itemNeededChoice1: null,

  healthImpactChoice1: 0,
  moralImpactChoice1: -20,
  itemRecivedChoice1: null,
  itemRemovedChoice1: null,

  onChoice2: () => {
    loadEpisode(appDiv)
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
    moralNeededChoice3: 'saint',
    itemNeededChoice3: null,
  
    healthImpactChoice3: 0,
    moralImpactChoice3: 0,
    itemRecivedChoice3: null,
    itemRemovedChoice3: null,
  
    backgroundPicture: '',
    backgroundSong: '' */
}
