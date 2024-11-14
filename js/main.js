import { drawCloth,drawWood } from "./table.js"
import { Ball } from "./ball.js"

drawCloth()
drawWood()

const ball = new Ball({
  pos: {x:400, y:300},
  vel: {x:0, y:0},
  color: "red"
})

ball.draw()