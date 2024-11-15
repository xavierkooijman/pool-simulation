import { canvasNorm, ctx } from "./canvas.js"
import { mouse } from "./mouse.js"

export class Stick{
  constructor(ball){
    this.ball = ball
    this.directionVector = {x:0, y:0}
    this.rotation = 0
    this.power = 0.15
    this.addStick()
    this.active = true
  }

  addStick(){
    document.addEventListener("click", e =>{
      if(!this.active) return
      this.active = false
      this.ball.vel.x = 100*Math.cos(this.rotation)*this.power
      this.ball.vel.y = 100*Math.sin(this.rotation)*this.power
    })
  }

  update(){

    this.directionVector = {
      x: mouse.x - this.ball.pos.x,
      y: mouse.y - this.ball.pos.y
    }

    this.rotation = Math.atan2(this.directionVector.y, this.directionVector.x)
  }

  draw(){
    if(!this.active) return
    ctx.save()
    ctx.lineWidth = 5
    ctx.lineCap = "round"
    ctx.strokeStyle = "rgba(255,255,255,0.5)"
    ctx.beginPath()
    ctx.moveTo(this.ball.pos.x, this.ball.pos.y)
    const directionVectorNorm = Math.sqrt(this.directionVector.x * this.directionVector.x + this.directionVector.y * this.directionVector.y)
    ctx.lineTo(
      this.ball.pos.x + canvasNorm/directionVectorNorm * this.directionVector.x,
      this.ball.pos.y + canvasNorm/directionVectorNorm * this.directionVector.y
    )
    ctx.stroke()
    ctx.closePath()
    ctx.restore()
  }
}