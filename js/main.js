import { drawCloth,drawWood } from "./table.js"
import { clearCanvas,ctx } from "./canvas.js"
import { balls, whiteBall } from "./setupBalls.js"
import { Stick } from "./stick.js"
import { loadImage } from "./stickImage.js"

const stick = new Stick(whiteBall)

drawCloth()
drawWood()
loadImage()
balls.forEach((ball) => ball.draw())


function loop(){
  clearCanvas()
  drawCloth()
  drawWood()
  balls.forEach(ball => ball.update())
  balls.forEach(ball => ball.draw())
  stick.update()
  stick.draw()
  stick.active = balls.every(ball => ball.isIdle)
  requestAnimationFrame(loop)
}

loop()
