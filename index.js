import { snake } from "./modules/snake.module.js";
import { changeDirection } from "./functions/changeDirection.js";

const idOfSnake = document.getElementById("snake-cubes");
export const snakeCoordinates = [
  {
    left: 30,
    top: 0,
  },
  {
    left: 0,
    top: 0,
  },
];

export const initialSnake = new snake(idOfSnake, snakeCoordinates);
initialSnake.render();



changeDirection();

// checkApple{
//     let apple= document.getElementById('apple');
//     let head= document.getElementById('head');

//     if(head.offsetLeft===apple.offsetLeft && head.offsetTop==apple.offsetTop){
//         // removeApple
//         apple.remove();

//         eatApple()
//     }
// }

// eatApple(){
//     // createApple
//     // updateScore

//     // addNewSegment
// }

// addNewSegment(){
//     let newSeg=document.createElement('div');
//     newSeg.classList.add('sqiare');

//     // need to define last element coordinate

//     newSeg.style.left='px'
//     newSeg.style.top='px'

//     let container = document.getElementById('');

// }

// game(){
// let snake = new snake();

// // move
// // change Direction
// // check apple

// // die
// };

// createSnake
// createApple

// setInterval(game, 100)
