import { initialSnake, stopFunction } from "../index.js";
import { move } from "./move.js";
import { CUBE_SIDE, SNAKE_SPEED } from "../config/config.js";
import { checkApple } from "./checkApple.js";

export let intervalId;
  let leftDistance = CUBE_SIDE;
  let topDistance = 0;
export const changeDirection = () => {

  document.addEventListener("keydown", (e) => {
    if (e.keyCode === 37) {
      // left
      leftDistance = -CUBE_SIDE;
      topDistance = 0;
    }
    if (e.keyCode === 38) {
      // up
      leftDistance = 0;
      topDistance = -CUBE_SIDE;
    }
    if (e.keyCode === 39) {
      // right
      leftDistance = CUBE_SIDE;
      topDistance = 0;
    }
    if (e.keyCode === 40) {
      // down
      leftDistance = 0;
      topDistance = CUBE_SIDE;
    }

  });
  intervalId = setInterval(
    () => {
      move(leftDistance, topDistance);
      // render snake
      initialSnake.render();
      // check apple
      checkApple();
    },
    SNAKE_SPEED,
    leftDistance,
    topDistance
  );
  stopFunction(intervalId);
};
