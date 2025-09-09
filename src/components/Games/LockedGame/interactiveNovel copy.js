import { prologue } from './components/acts/prologue/prologue'
import { prologueCreator } from './components/functions/functions'
import './style.css'

export const appDiv = document.querySelector('#app')

prologueCreator(appDiv, prologue)

/* prologueCreator(appDiv, prologue) */

//TODO LIST

// Crear prólogo mediante una función
// Crear diagrama con todos los actos, hechos, objetos, decisiones, consecuencais
