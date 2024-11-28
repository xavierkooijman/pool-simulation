import { canvas, canvasMargin } from "./canvas.js";
import { Pocket } from "./pocket.js";

export const pockets = [
  new Pocket({
    pos: {x:canvasMargin, y:canvasMargin}
  }),
  new Pocket({
    pos: {x:canvas.width / 2, y:canvasMargin}
  }),
  new Pocket({
    pos: {x:canvas.width - canvasMargin, y:canvasMargin}
  }),
  new Pocket({
    pos: {x:canvasMargin, y:canvas.height - canvasMargin}
  }),
  new Pocket({
    pos: {x:canvas.width / 2, y:canvas.height - canvasMargin}
  }),
  new Pocket({
    pos: {x:canvas.width - canvasMargin, y:canvas.height - canvasMargin}
  })
]