import { initialSnake } from "../index.js";
import { move } from "./move.js";
import { CUBE_SIDE } from "../config/config.js";

export const changeDirection = () => {
  document.addEventListener("keydown", (e) => {
    if (e.keyCode === 37) {
      // left
      move(-CUBE_SIDE, 0);
    }
    if (e.keyCode === 38) {
      // up
      move(0, -CUBE_SIDE);
    }
    if (e.keyCode === 39) {
      // right
      move(CUBE_SIDE, 0);
    }
    if (e.keyCode === 40) {
      // down
      move(0, CUBE_SIDE);
    }
    initialSnake.render();
  });
};
