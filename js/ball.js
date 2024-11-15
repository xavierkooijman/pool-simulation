import { canvas, canvasMargin, ctx } from "./canvas.js"

export class Ball{
  constructor({pos, color, vel}){
    this.pos = pos
    this.color = color
    this.vel = vel ?? { x: 0, y: 0 }
    this.size = 18
    this.friction = 0.99
  }

  draw(){
    ctx.beginPath()
    ctx.fillStyle = this.color
    ctx.arc(this.pos.x, this.pos.y, this.size, 0 , 2 * Math.PI)
    ctx.fill()
    ctx.closePath()
  }

  update(){
    this.pos.x += this.vel.x
    this.pos.y += this.vel.y
    this.vel.x *= this.friction
    this.vel.y *= this.friction
    this.handleSmallVelocities()
    this.bounceOfWall()
  }

  bounceOfWall(){
    //horizontal
    if(this.pos.x + this.size >= canvas.width - canvasMargin){
      this.pos.x = canvas.width - canvasMargin - this.size
      this.vel.x *= -1
    }
    else if(this.pos.x - this.size <= canvasMargin){
      this.pos.x = this.size + canvasMargin
      this.vel.x *= -1
    }

    //vertical
    if(this.pos.y + this.size >= canvas.height - canvasMargin){
      this.pos.y = canvas.height - canvasMargin - this.size
      this.vel.y *= -1
    }
    else if(this.pos.y - this.size <= canvasMargin){
      this.pos.y = this.size + canvasMargin
      this.vel.y *= -1
    }
  }

  handleSmallVelocities(){
    const limit = 0.04

    if(Math.abs(this.vel.x) < limit || Math.abs(this.vel.y) < limit){
      this.vel.x = 0
      this.vel.y = 0
    }
  }

  get isIdle() {
    return this.vel.x == 0 && this.vel.y == 0;
}
}