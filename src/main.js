'use strict'

import './main.css'
import ModuloTimesTable from './ModuloTimesTable'

window.onload = function () {
  let canvas = document.querySelector('#canvas')
  canvas.width = document.documentElement.clientWidth
  canvas.height = document.documentElement.clientHeight

  let moduloTimesTable = new ModuloTimesTable(canvas)

  let moduloRange = document.querySelector('#moduloRange')
  moduloRange.value = moduloTimesTable.modulo
  moduloRange.oninput = (event) => { moduloTimesTable.modulo = event.target.value }

  let multiplyRange = document.querySelector('#multiplyRange')
  multiplyRange.value = moduloTimesTable.multiplier
  multiplyRange.oninput = (event) => { moduloTimesTable.multiplier = event.target.value }

  moduloTimesTable.render()
}
