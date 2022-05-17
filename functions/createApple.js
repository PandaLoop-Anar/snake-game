import { MOVING_AREA_HEIGHT, MOVING_AREA_WIDTH, CUBE_SIDE } from "../config/config.js";
import { eatApple, snakeCoordinates } from "../index.js";

export const createApple = () => {
  const apple = document.getElementById("apple");
  const randomLeft = Math.trunc(Math.random() * (MOVING_AREA_WIDTH / CUBE_SIDE)) * CUBE_SIDE;
  const randomTop = Math.trunc(Math.random() * (MOVING_AREA_HEIGHT / CUBE_SIDE)) * CUBE_SIDE;
  
  // for(let i=1; i<snakeCoordinates.length; i++){
  //   if(snakeCoordinates[i].left===randomLeft && snakeCoordinates[i].top===randomTop){
  //     eatApple();
  //     console.log('same');
  //   }
  // }

  apple.style.left = `${randomLeft}px`;
  apple.style.top = `${randomTop}px`;
  apple.style.display = "block";
  return [randomLeft, randomTop];
};
