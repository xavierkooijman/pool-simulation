// Accessing the canvas and context
export const canvas = document.getElementById("canvas")
export const ctx = canvas.getContext("2d")

//Canvas width, height and margin
export const canvasMargin = 60

canvas.width = 1200 + 2 * canvasMargin;
canvas.height = 600 + 2 * canvasMargin;

export function clearCanvas(){
  ctx.clearRect(0,0,canvas.width,canvas.height)
}

export const canvasNorm = Math.sqrt(canvas.width * canvas.width + canvas.height * canvas.height)