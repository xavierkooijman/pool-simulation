import { drawCloth,drawWood } from "./table.js"
import { Ball } from "./ball.js"
import { clearCanvas } from "./canvas.js"

const ball = new Ball({
  pos: {x:400, y:300},
  vel: {x:4, y:1},
  color: "#e62636"
})

function loop(){
  clearCanvas()
  drawCloth()
  drawWood()
  ball.update()
  ball.draw()
  requestAnimationFrame(loop)
}

loop()