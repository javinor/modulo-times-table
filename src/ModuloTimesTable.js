'use strict'

export default class ModuloTimeTable {
  constructor (canvas, modulo, multiplier) {
    this.canvas = canvas
    this._modulo = modulo
    this._multiplier = multiplier
  }

  get modulo () { return this._modulo }
  set modulo (value) {
    this._modulo = value
    this.render()
  }

  get multiplier () { return this._multiplier }
  set multiplier (value) {
    this._multiplier = value
    this.render()
  }

  get radius () {
    return 0.5 * Math.min(this.canvas.height * 0.75, this.canvas.width * 0.75)
  }

  getNthPoint (n) {
    const centerX = this.canvas.width / 2
    const centerY = this.canvas.height / 2

    const dx = this.radius * Math.cos(2 * Math.PI * n / this.modulo)
    const dy = this.radius * Math.sin(2 * Math.PI * n / this.modulo)

    return {
      x: centerX + dx,
      y: centerY + dy
    }
  }

  render () {
    const ctx = this.canvas.getContext('2d')
    const height = this.canvas.height
    const width = this.canvas.width

    ctx.clearRect(0, 0, width, height)
    ctx.beginPath()

    for (let i = 0; i < this.modulo; i++) {
      const from = this.getNthPoint(i)
      const to = this.getNthPoint(i * this.multiplier % this.modulo)

      ctx.moveTo(from.x, from.y)
      ctx.lineTo(to.x, to.y)
    }

    ctx.stroke()
    ctx.closePath()
  }
}
