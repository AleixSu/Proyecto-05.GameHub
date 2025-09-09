import { appDiv } from '../../../../main'
import { loadAct } from '../../../functions/functions'
import { episode_1_a } from './episode_1_a'

export const episode_1_a_a_a = {
  id: 'final A',
  title: 'Bienvenida seas, Oscuridad',
  narrative: `
<p>Alzas una ceja, como si la situación te resultara casi divertida.</p>
<p>—Depende —respondes sin apartar la vista del hombre de la porra mientras guardas el mapa—. ¿Este camino lleva al norte?</p>

<p>Tu tono suena relajado, casi distraído. Pero por dentro, todo se mueve deprisa. Mides distancias, evalúas rostros, escuchas el crujido de ramas detrás. Quieres ganar tiempo. Conocer antes de actuar. Un movimiento en falso podría ser el último.</p>

<p>El bandido suelta una risa seca.  
—Amigo... no sabes dónde te has metido.</p>

<p>Y tiene razón.</p>

<p>Los pasos tras de ti se acercan. Todavía no corren. Caminan. Saben que te tienen.
Tu rostro cambia. La farsa cae. La mirada se endurece, tu entorno responde. Tensión, ruido, movimiento... como si cada figura en escena supiera ya su parte en una coreografía mortal. Tus dedos encuentran la empuñadura. En un solo gesto, te impulsas hacia adelante. Preparas un salto, con la intención de partirlo en dos antes de que sus amigos lleguen. El bandido retrocede, sorprendido, y levanta la porra para cubrirse. Pero tú eres más rápido. O casi.</p>

<p>Justo cuando apoyas tu pierna para impulsarte, sientes algo. Frío paralizante en tu espalda baja.  
La fuerza se va. Tus rodillas ceden.</p>

<p>El ruido se torna, silencio. La coreografía llega a su fin casi antes de empezar. Una humedad caliente recorre tu costado. El dolor llega tarde, pero llega. Profundo. Real.</p>

<p>Levantas la vista al cielo. Las nubes se apartan lentamente. Como si te abriesen el camino a un final que no crees merecer y vuelves a bajar tu mirada.</p>

<p>Delante de ti, el bandido avanza despacio, como si el tiempo mismo se hubiera ralentizado. Su risa, muda desde tu percepción, dibuja una escena grotesca. Por un instante no parece un hombre: es la sombra de tus errores, la burla de todas esas preguntas a las que juraste dar respuesta y que ya nunca la tendrán. Como si tus propios demonios se rieran de ti, justo antes del final.</p>

<p>Ya delante de ti te agarra del cabello y con una hoja pequeña pero afilada rasga tu garganta. No sientes nada, solo intuyes lo que acaba de ocurrir.</p>

<p>Todo se desdibuja. El suelo viene a tu encuentro.</p>

<p>El bosque guarda silencio y no deja testigos.</p>

<p>Todo ha terminado.</p>
`,

  onChoice1: () => {
    loadAct(appDiv, episode_1_a)
  }
}
