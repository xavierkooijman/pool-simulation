import { canvasNorm, ctx } from "./canvas.js"
import { mouse } from "./mouse.js"
import { img } from "./stickImage.js"

export class Stick{
  constructor(ball){
    this.ball = ball
    this.directionVector = {x:0, y:0}
    this.origin = {x:-975, y:-10}
    this.rotation = 0
    this.power = 0
    this.addStick()
    this.active = true
  }

  addStick(){
    document.addEventListener("keydown", e =>{
      if(!this.active) return
      if(e.key === "w" && this.power < 0.3){
        this.power += 0.02
        this.origin.x -= 8
      }
    })

    document.addEventListener("keydown", e =>{
      if(!this.active) return
      if(e.key === "s" && this.power > 0.01){
        this.power -= 0.05
        this.origin.x += 8
      }
    })

    document.addEventListener("click", () =>{
      if(!this.active || this.power == 0) return
      this.origin = {x:-955, y:-10}
      setTimeout(() =>{
        this.ball.vel.x = 100*Math.cos(this.rotation)*this.power
        this.ball.vel.y = 100*Math.sin(this.rotation)*this.power
        this.power = 0
        this.active = false
        this.origin = {x:-975, y:-10}
      }, 30)
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
    ctx.translate(this.ball.pos.x, this.ball.pos.y)
    ctx.rotate(this.rotation)
    ctx.drawImage(img,this.origin.x,this.origin.y)
    ctx.closePath()
    ctx.restore()
  }
}