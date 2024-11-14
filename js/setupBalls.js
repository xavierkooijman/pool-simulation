import { Ball } from "./ball.js"
import { canvas, canvasMargin } from "./canvas.js"

export const Colors = {
  White: "#fffbe4",
  Black: "#090c09",
  Blue: "#1b4ad5",
  Green: "#128355",
  Red: "#e62636",
  Yellow: "#fbb624",
  Purple: "#754da5",
  Orange: "#f56f17",
  Brown: "#754da5"
}

  const start = {
      x: canvas.width - canvasMargin - (1 / 4) * (canvas.width - 2 * canvasMargin),
      y: canvas.height / 2
  }

  const step = {
      x: 33,
      y: 19
  }

  export const balls = [
      new Ball({
          pos: {
              x: canvasMargin + (1 / 4) * (canvas.width - 2 * canvasMargin),
              y: start.y,
          },
          color: Colors.White,
      }),

      new Ball({
          pos: { x: start.x, y: start.y },
          color: Colors.Yellow,
      }),

      new Ball({
          pos: { x: start.x + step.x, y: start.y - step.y },
          color: Colors.Purple,
      }),

      new Ball({
          pos: { x: start.x + step.x, y: start.y + step.y },
          color: Colors.Brown,
      }),

      new Ball({
          pos: { x: start.x + 2 * step.x, y: start.y - 2 * step.y },
          color: Colors.Yellow,
      }),

      new Ball({
          pos: { x: start.x + 2 * step.x, y: start.y },
          color: Colors.Black,
      }),

      new Ball({
          pos: { x: start.x + 2 * step.x, y: start.y + 2 * step.y },
          color: Colors.Brown,
      }),

      new Ball({
          pos: { x: start.x + 3 * step.x, y: start.y - 3 * step.y },
          color: Colors.Green,
      }),

      new Ball({
          pos: { x: start.x + 3 * step.x, y: start.y - 1 * step.y },
          color: Colors.Red,
      }),

      new Ball({
          pos: { x: start.x + 3 * step.x, y: start.y + 1 * step.y },
          color: Colors.Blue,
      }),

      new Ball({
          pos: { x: start.x + 3 * step.x, y: start.y + 3 * step.y },
          color: Colors.Green,
      }),

      new Ball({
          pos: { x: start.x + 4 * step.x, y: start.y - 4 * step.y },
          color: Colors.Orange,
      }),

      new Ball({
          pos: { x: start.x + 4 * step.x, y: start.y - 2 * step.y },
          color: Colors.Purple,
      }),

      new Ball({
          pos: { x: start.x + 4 * step.x, y: start.y },
          color: Colors.Orange,
      }),

      new Ball({
          pos: { x: start.x + 4 * step.x, y: start.y + 2 * step.y },
          color: Colors.Blue,
      }),

      new Ball({
          pos: { x: start.x + 4 * step.x, y: start.y + 4 * step.y },
          color: Colors.Red,
      }),
  ]