import { drawCloth,drawWood } from "./table.js"
import { Ball } from "./ball.js"
import { clearCanvas } from "./canvas.js"
import { balls } from "./setupBalls.js"

drawCloth()
drawWood()
balls.forEach((ball) => ball.draw())

/*
function loop(){
  clearCanvas()
  drawCloth()
  drawWood()
  ball.update()
  ball.draw()
  requestAnimationFrame(loop)
}

loop()*/