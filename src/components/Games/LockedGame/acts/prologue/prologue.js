import { appDiv } from '../../../main'
import { loadAct } from '../../functions/functions'
import { episode_1_a } from '../act_I/1. Episodio I/episode_1_a'

export const prologue = {
  prologue: 'Prólogo',
  narrative: `
<p>El aire tibio de la primavera, que sopla cerca del mediodía, acaricia tu rostro mientras sigues recostado contra aquel viejo roble que se alza en el terreno trasero de tu pequeña granja. Su sombra ha sido tu refugio durante las horas más inclementes de las faenas en el campo. Son días duros, sí, pero nada comparables con aquellos en los que viviste como soldado y mercenario, luchando por tu vida en batallas sin nombre. Con la mirada sombría recorres todas las ocasiones en que estuviste a un suspiro de poner punto final a tu historia, cuando, de repente, una voz te arranca de tu ensimismamiento:</p>
<p>—Papá, mamá dice que vengas, que la comida ya está lista.</p>

<p>Alzas la mirada y ves a una niña de unos seis años que corre hacia ti con una sonrisa radiante. No puedes evitar devolverle la sonrisa y mirarla con ternura justo antes de que salte sobre ti sin avisar.</p>
<p>—¡Claire, que ya pesas mucho! —bromeas, riendo con ella.</p>

<p>Te incorporas despacio, desperezando músculos endurecidos por años de marchas forzadas y trincheras embarradas. Claire ríe cuando la alzas sobre tus hombros; sus trenzas vuelan al viento y sus risas se mezclan con el zumbido de las abejas que rondan el campo de flores silvestres. Das el primer paso y el crujido de la hierba seca bajo tus botas marca el compás de aquel pequeño paseo. De vez en cuando, ella señala algo—una nube con forma de borrego, un gorrión que se lanza en picado—y tú respondes con gruñidos divertidos, fingiendo no ver nada para arrancarle otra carcajada.</p>

<p>Pero a medio camino una corriente helada te recorre la espalda. El sol sigue brillando, la brisa sigue oliendo a hierba nueva… y, sin embargo, sientes el mismo peso opresivo que preludia una emboscada. Instintivamente echas mano al costado donde antaño pendía tu espada; allí solo encuentras la tela áspera de tu camisa de trabajo.</p>

<p>Llegas hasta el porche de la casa. Claire se desliza de tus hombros antes de que se lo pidas, como si percibiera tu tensión. Su manita busca la tuya.</p>
<p>—¿Pasa algo, papá? —susurra.</p>

<p>Tu pulso retumba en los oídos. Una sombra parece arrastrarse por debajo del umbral, borrando el color del día. Empujas la puerta con el dorso, queriendo mantener tu cuerpo entre lo desconocido y tu hija.</p>

<p>El interior es noche helada. Un olor metálico y espeso te golpea primero; luego la visión: sangre salpicando paredes y suelo, un charco oscuro que se expande bajo el cuerpo sin vida de tu esposa. Su cabeza descansa a un lado, ojos aún abiertos hacia nada.</p>

<p>El grito que amenaza con romperte el pecho se asfixia cuando algo cambia en tu mano; la delicada presión de los dedos de Claire desaparece, sustituida por la aspereza familiar de cuero moldeado. Bajas la mirada: empuñas de nuevo aquella espada que juraste enterrar para siempre.</p>

<p>La ira, la rabia, la tristeza... todo se enrosca en tu pecho como una serpiente negra y caliente. Cada emoción pugna por desgarrarte desde dentro mientras tus ojos, enrojecidos, se clavan en el cuerpo de tu esposa. Tus labios tiemblan. Das un paso. Luego otro. La espada cuelga inerte en tu mano, olvidada, hasta que finalmente se te escapa y cae al suelo con un golpe seco.</p>

<p>Te arrodillas junto a ella, torpe, vencido. Tus manos, ensangrentadas, se elevan hasta cubrirte el rostro. No puedes mirar. No puedes aceptar.</p>
<p>—Lo siento... —balbuceas—. Perdóname... por favor...</p>

<p>Tu voz se quiebra como un cristal agrietado.</p>
<p>—Que no vuelva a pasar... por favor... que no vuelva a pasar...</p>

<p>Las lágrimas caen sin tregua, se mezclan con la sangre, con la tierra.</p>
<p>—No puedo volver a oírla... —susurras, apenas audible—. Si la oigo otra vez… si la oigo otra vez no sé qué será de mí...</p>

<p>Silencio.</p>
<p>Un silencio profundo, espeso, que se pega al alma como brea. No hay viento. No hay insectos. No hay nada.</p>

<p>Hasta que la oyes justo detrás de ti, dulce, inocente…</p>

<p>—Papá... ¿por qué lo hiciste?</p>
`,
  onChoice1: () => {
    loadAct(appDiv, episode_1_a)
  }
}
