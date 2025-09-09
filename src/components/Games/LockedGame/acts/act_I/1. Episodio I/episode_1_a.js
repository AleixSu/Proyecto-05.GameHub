import { appDiv } from '../../../../main'
import { loadEpisode } from '../../../functions/functions'
import { episode_1_a_a } from './episode_1_a_a'

export const episode_1_a = {
  id: 1,
  act: 'Acto I: El comienzo',
  episode: 'Episodio primero: Las Cenizas del Recuerdo',
  part: 'Parte I',
  narrative: `
<p>El grito queda atrapado en tu garganta mientras tus ojos se abren de golpe. Un jadeo entrecortado te saca del abismo. El cielo, encapotado por un dosel de ramas oscuras, parpadea sobre ti como un presagio. Estás empapado en sudor frío, tendido sobre la tierra húmeda y cubierta de hojas podridas.</p>

<p>Tu pecho sube y baja violentamente. Tus ojos, desorbitados, recorren el entorno sin verlo. Durante unos segundos no sabes dónde estás… ni quién eres. Solo queda el eco de la voz de tu hija, repitiéndose en tu mente como una maldición:</p>
<p>“Papá... ¿por qué lo hiciste?”</p>

<p>Llevas una mano temblorosa a tu rostro. Tocas la piel deformada, la carne rugosa marcada por la guerra y por otras cosas que no se pueden nombrar. Poco a poco, tu respiración se estabiliza. El temblor en tus dedos cesa. El temblor del alma no.</p>

<p>La expresión de terror se apaga lentamente. Tu rostro vuelve a aquella máscara vacía, indiferente, apagada. La misma que has llevado los últimos tres años. La misma con la que has enterrado a todos… incluso a ti mismo.</p>
 
<p>Te incorporas con esfuerzo, sintiendo cada hueso, cada cicatriz, cada peso. El desgaste, las heridas, los demonios que susurran al oído y los fantasmas que se sientan junto a ti cuando crees estar solo. Todo está ahí. Todo sigue ahí.</p>
<p>Pero no dices nada.</p>
<p>Te pones en pie. El bosque cruje a tu alrededor, húmedo y silencioso, como si estuviera conteniendo la respiración.</p>
<p>Murmuras, más para ti que para el mundo:</p>
<p>—Este contrato no se va a cumplir solo.</p>
<p>Sacudes un poco la tierra de tu ropa, recoges lo poco que tienes y te tomas un momento para escuchar. Ningún sonido de pájaros. Ninguna voz humana. Solo viento entre ramas muertas. Y la sensación constante de que algo te observa.</p>

<p>Quieres recordar por qué estás aquí. Con la mano rebuscas en tu zurrón, apartando un trozo de pan duro como piedra y una daga oxidada encuentras el papel arrugado, sucio, apenas legible, que te ha traído hasta este rincón olvidado del mundo.</p>

<p>Lo desdoblas con cuidado. La tinta está corrida por la humedad y el tiempo, pero aún puedes leerlo:</p>

<p>"Se ofrece recompensa a quien dé muerte a los miembros de la banda que asola los caminos del norte. La paga será entregada al regresar a la aldea. Se requiere prueba de muerte."</p>

<p>No es un trabajo honorable. Ni limpio.</p>
<p>Pero te da igual. Tienes hambre. Y tu espada está cada vez más roma.</p>

<p>Alzas la vista. Una nube se aparta y un rayo de luz de luna se cuela entre los árboles, tiñendo de gris pálido la maraña del bosque.</p>
<p>Estás cansado. Pero el bosque no espera. Y los bandidos tampoco...</p>
`,
  choice1:
    '<strong>Te quedas sentado unos minutos más, descansando y repasando el mapa dibujado en el reverso del contrato.</strong> Podría ser tu única oportunidad de memorizarlo antes de entrar en territorio hostil. No querrás andar a ciegas entre cuchillos.',
  choice2:
    '<strong>Doblas el papel y te levantas. El camino se puede intuir sobre la marcha.</strong> Estas cansado pero prefieres cazar a ser cazado y quedarse demasiado tiempo en un mismo sitio nunca ha sido buena idea.',
  choice3: '',

  onChoice1: () => {
    loadEpisode(appDiv, episode_1_a_a)
  },
  healthNeededChoice1: null,
  moralNeededChoice1: null,
  itemNeededChoice1: null,

  healthImpactChoice1: 0,
  moralImpactChoice1: 0,
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
