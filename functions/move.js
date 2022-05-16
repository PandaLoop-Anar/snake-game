import { snakeCoordinates } from "../index.js";
import { MOVING_AREA_WIDTH, MOVING_AREA_HEIGHT, CUBE_SIDE } from "../config/config.js";

export const move = (snakeHead_left, snakeHead_top) => {
  for (let i = snakeCoordinates.length - 1; i > 0; i--) {
    snakeCoordinates[i].left = snakeCoordinates[i - 1].left;
    snakeCoordinates[i].top = snakeCoordinates[i - 1].top;
  }
  snakeCoordinates[0].left += snakeHead_left;
  snakeCoordinates[0].top += snakeHead_top;
  if (snakeCoordinates[0].left >= MOVING_AREA_WIDTH) {
    snakeCoordinates[0].left = 0;
  }
  if (snakeCoordinates[0].left < 0) {
    snakeCoordinates[0].left = MOVING_AREA_WIDTH-CUBE_SIDE;
  }
  if (snakeCoordinates[0].top >= MOVING_AREA_HEIGHT) {
    snakeCoordinates[0].top = 0;
  }
  if (snakeCoordinates[0].top < 0) {
    snakeCoordinates[0].top = MOVING_AREA_HEIGHT-CUBE_SIDE;
  }
};
