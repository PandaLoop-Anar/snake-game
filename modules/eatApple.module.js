import {
    snakeCoordinates,
    gameScore,
    addNewSegment,
  } from "../index.js";
  import { createApple } from "../functions/createApple.js"; 
  
  export class eatAppleClass {
    foodCoordinates;
  
    eatApple() {
      // create Apple
      this.foodCoordinates = createApple();
      // checking Apple not to be on snake
      const [randomLeft, randomTop] = this.foodCoordinates;
      for (let i = 0; i < snakeCoordinates.length; i++) {
        if (
          snakeCoordinates[i].left === randomLeft &&
          snakeCoordinates[i].top === randomTop
        ) {
          this.foodCoordinates = createApple();
        }
      }
      // update Score
      gameScore.userScore++;
      gameScore.updateUserScore();
      // add New Segment to increase snake size
      addNewSegment();
    }
  }
  