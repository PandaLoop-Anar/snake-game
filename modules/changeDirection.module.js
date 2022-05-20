import { initialSnake } from "../index.js";
import { move } from "../functions/move.js";
import { CUBE_SIDE, SNAKE_SPEED } from "../config/config.js";
import { checkApple } from "../functions/checkApple.js";

export class changeDirectionClass {
  _intervalId;
  _leftDistance = CUBE_SIDE;
  _topDistance = 0;

  changeDirection = () => {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode === 37) {
        // left
        this._leftDistance = -CUBE_SIDE;
        this._topDistance = 0;
      }
      if (e.keyCode === 38) {
        // up
        this._leftDistance = 0;
        this._topDistance = -CUBE_SIDE;
      }
      if (e.keyCode === 39) {
        // right
        this._leftDistance = CUBE_SIDE;
        this._topDistance = 0;
      }
      if (e.keyCode === 40) {
        // down
        this._leftDistance = 0;
        this._topDistance = CUBE_SIDE;
      }
    });
    this.stopFunction();
    this._intervalId = setInterval(
      () => {
        move(this._leftDistance, this._topDistance);
        // render snake
        initialSnake.render();
        // check apple
        checkApple();
      },
      SNAKE_SPEED,
      this._leftDistance,
      this._topDistance
    );
  };
  stopFunction = () => {
    clearInterval(this._intervalId);
  };
}
