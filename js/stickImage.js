import { ctx } from "./canvas.js"

export const img = new Image()

export function loadImage(){
  img.src = "../assets/spr_stick.png"
  img.onload = function () {
    ctx.drawImage(img,0,0)
  }
}