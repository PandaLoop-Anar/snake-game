import { snakeCoordinates, snakeEatApple} from "../index.js";


export const checkApple = () => {
  const [appleLeft, appleTop] = snakeEatApple.foodCoordinates;
  const head = snakeCoordinates[0];

  if (head.left === appleLeft && head.top == appleTop) {
    // console.log("time to eat apple");
    const apple = document.getElementById("apple");
    // removeApple
    apple.style.display = "none";
    // eat Apple and create new one
    // const snakeEatApple=new eatAppleClass(foodCoordinates);
    snakeEatApple.eatApple();
  }
};
