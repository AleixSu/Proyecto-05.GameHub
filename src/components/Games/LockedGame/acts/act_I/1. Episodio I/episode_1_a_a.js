import { appDiv } from '../../../../main'
import { deathScreenCreator, loadEpisode } from '../../../functions/functions'
import { prologue } from '../../prologue/prologue'
import { episode_1_a_a_a } from './episode_1_a_a_a-death'
import { episode_1_a_a_b } from './episode_1_a_a_b'

export const episode_1_a_a = {
  id: 1.1,
  act: null,
  episode: 'Episodio primero: Las Cenizas del Recuerdo',
  part: 'Parte II',
  narrative: `
<p>Te sientas en un tocón húmedo, el papel entre los dedos. Le das la vuelta y te encuentras con un tosco dibujo: un mapa a medio hacer, tembloroso, trazado con prisas. Muestra los caminos principales y algunas desviaciones; una línea de flechas marca la ruta y una X señala el destino.</p>

<p>—La X marca el tesoro ¿No? Mascullas mientras le buscas el humor a la situación.</p>

<p>Piensas en quien lo dibujó. El contrato viene de una aldea pequeña, sin milicia ni medios para protegerse. Por eso recurren a ti. O a cualquiera con acero, hambre y poco que perder.</p>

<p>Por un momento te preguntas cuánto saben los administradores del feudo—esos escribas bien alimentados y recaudadores de impuestos gobernando desde sus torres de marfil—de lo que ocurre aquí. Tal vez lo permiten. Tal vez incluso se benefician. ¿Un impuesto oculto a través del pillaje? No sería la primera vez.</p>

<p>Un crujido seco te saca del pensamiento.</p>

<p>—¿Te has perdido?</p>

<p>La voz llega desde el camino, al frente. Instintivamente te tensas, pero alzas la mirada con calma, sin mostrar inquietud. No escuchaste pasos ni ramas romperse; estabas demasiado concentrado.</p>

<p>Un hombre te observa. Viste ropas oscuras, curtidas por el barro y la intemperie. En la mano lleva una porra de madera agrietada y sucia. No sonríe. No lo necesita.</p>

<p>Y no está solo.</p>

<p>Ahora, con los sentidos en guardia, captas lo que antes se te escapaba: un roce sordo entre los arbustos, un paso mal contenido sobre la hojarasca. Dos, tal vez tres personas más, moviéndose detrás de ti.</p>

<p>Te rodean.</p>

<p>Estás en peligro. Y lo sabes.<br>No puedes perder el tiempo.</p>

`,
  choice1:
    '<strong> Le diriges la palabra con calma, midiendo cada gesto.</strong> No buscas diálogo, buscas tiempo. Para observar, contar sombras, y medir salidas. Necesitas entender en qué lío te has metido… y como vas a salir de él.',
  choice2:
    '<strong>Te lanzas a por el bandido sin pensarlo dos veces.</strong> No vas a esperar a que se cierren más sobre ti. Si hay que caer, será con la espada en mano y el primero en sangrar no serás tú.',
  choice3: '',

  onChoice1: () => {
    deathScreenCreator(appDiv, episode_1_a_a_a)
  },
  healthNeededChoice1: null,
  moralNeededChoice1: null,
  itemNeededChoice1: null,

  healthImpactChoice1: 0,
  moralImpactChoice1: 0,
  itemRecivedChoice1: null,
  itemRemovedChoice1: null,

  onChoice2: () => {
    loadEpisode(appDiv, episode_1_a_a_b)
  },

  healthNeededChoice2: null,
  moralNeededChoice2: null,
  itemNeededChoice2: null,

  healthImpactChoice2: -20,
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
