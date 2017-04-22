'use strict'

import './main.css'
import ModuloTimesTable from './ModuloTimesTable'

window.onload = function () {
  const canvas = document.querySelector('#canvas')
  canvas.width = document.documentElement.clientWidth
  canvas.height = document.documentElement.clientHeight

  const moduloTimesTable = new ModuloTimesTable(canvas, 571, 2)

  const moduloRange = document.querySelector('#moduloRange')
  const moduloLabel = document.querySelector('#moduloRangeLabel')
  moduloRange.value = moduloLabel.innerHTML = moduloTimesTable.modulo
  moduloRange.oninput = (event) => { moduloTimesTable.modulo = moduloLabel.innerHTML = event.target.value }

  const multiplyRange = document.querySelector('#multiplyRange')
  const multiplyLabel = document.querySelector('#multiplyRangeLabel')
  multiplyRange.value = multiplyLabel.innerHTML = moduloTimesTable.multiplier
  multiplyRange.oninput = (event) => { moduloTimesTable.multiplier = multiplyLabel.innerHTML = event.target.value }

  const stepUpMultiplier = () => {
    multiplyRange.stepUp()
    moduloTimesTable.multiplier = multiplyLabel.innerHTML = multiplyRange.value
    window.requestAnimationFrame(stepUpMultiplier)
  }
  window.requestAnimationFrame(stepUpMultiplier)

  moduloTimesTable.render()
}
