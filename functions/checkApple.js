import { foodCoordinates, snakeCoordinates, eatApple } from "../index.js";

export const checkApple = () => {
  const [appleLeft, appleTop] = foodCoordinates;
  const head = snakeCoordinates[0];

  if (head.left === appleLeft && head.top == appleTop) {
    // console.log("time to eat apple");
    const apple = document.getElementById("apple");
    // removeApple
    apple.style.display = "none";
    // eat Apple and create new one
    eatApple();
  }
};
