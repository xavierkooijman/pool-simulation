import { ctx } from "./canvas.js"

export class Pocket{
  constructor({pos}){
    this.pos = pos
    this.size = 30
    this.color = "#020202"
  }

  draw(){
    ctx.fillStyle = this.color
    ctx.beginPath()
    ctx.arc(this.pos.x, this.pos.y, this.size, 0, 2*Math.PI)
    ctx.fill()
    ctx.closePath()
  }
}