import { canvas, canvasMargin, ctx } from "./canvas.js"
import { balls } from "./setupBalls.js"
import { add,sub,scale,distance,dotProduct } from "./calc.js"

export class Ball{
  constructor({pos, color, vel}){
    this.pos = pos
    this.color = color
    this.vel = vel ?? { x: 0, y: 0 }
    this.size = 18
    this.friction = 0.99
  }

  draw(){
    //Create ball light
    const gradientLight = ctx.createRadialGradient(-0.4 * this.size, -0.4 * this.size,1,0,0,this.size)
    gradientLight.addColorStop(0,"rgba(255,255,255,0.25)")
    gradientLight.addColorStop(0.4,"rgba(255,255,255,0)")
    gradientLight.addColorStop(0.7,"rgba(255,255,255,0)")
    gradientLight.addColorStop(1,"rgba(255,255,255,0.01)")

    //draw ball
    ctx.save()
    ctx.translate(this.pos.x,this.pos.y)
    ctx.beginPath()
    ctx.arc(2, 2, this.size, 0 , 2 * Math.PI)
    ctx.fillStyle = "rgba(0,0,0,0.15)"
    ctx.fill()
    ctx.closePath()
    ctx.beginPath()
    ctx.fillStyle = this.color
    ctx.arc(0, 0, this.size, 0 , 2 * Math.PI)
    ctx.fill()
    ctx.fillStyle = gradientLight
    ctx.fill()
    ctx.closePath()
    ctx.restore()
  }

  update(){
    this.pos.x += this.vel.x
    this.pos.y += this.vel.y
    this.vel.x *= this.friction
    this.vel.y *= this.friction
    this.handleSmallVelocities()
    this.bounceOfWall()
    this.ballCollisions()
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

    if(Math.abs(this.vel.x) < limit && Math.abs(this.vel.y) < limit){
      this.vel.x = 0
      this.vel.y = 0
    }
  }

  ballCollisions() {
    balls.forEach((ball) => {
        if (ball == this) return

        //check for collision
        const dist = distance(this.pos, ball.pos)
        if (dist > this.size + ball.size) return

        //pull balls apart when there is overlap
        const L = this.size + ball.size - dist
        const x_d = sub(ball.pos, this.pos)
        const c = scale(L / (2 * dist), x_d)
        this.pos = sub(this.pos, c)
        ball.pos = add(ball.pos, c)

        //elastic collision
        const v_d = sub(this.vel, ball.vel)
        const w = scale((1 / Math.pow(dist, 2)) * dotProduct(x_d, v_d),x_d)
        this.vel = sub(this.vel, w)
        ball.vel = add(ball.vel, w)
    })
}

  get isIdle() {
    return this.vel.x == 0 && this.vel.y == 0;
}
}
