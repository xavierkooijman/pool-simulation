import {ctx, canvas, canvasMargin} from "./canvas.js"

export function drawCloth(){
  ctx.fillStyle = "#3888ad"
  ctx.fillRect(0,0,canvas.width,canvas.height)
}

export function drawWood(){
  ctx.fillStyle = "#84240c"
  ctx.fillRect(0,0,canvas.width,canvasMargin)
  ctx.fillRect(0,canvas.height - canvasMargin,canvas.width,canvasMargin)
  ctx.fillRect(0,0,canvasMargin,canvas.height)
  ctx.fillRect(canvas.width - canvasMargin,0,canvasMargin,canvas.height)
}