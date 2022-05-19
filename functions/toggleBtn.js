import { toggleBtn, startGame, snakeChangeDirection } from "../index.js";

export const toggleBtnFunction = (toggleNumber) => {
    let toggleNum=toggleNumber;
  toggleBtn.addEventListener("click", (e) => {
    if (toggleNum === 0) {
      e.target.innerText = "Pause Game";
      e.target.style.backgroundColor = "orange";
      
      startGame();
    } else if (toggleNum > 1 && toggleNum % 2 === 0) {
      e.target.innerText = "Pause Game";
      e.target.style.backgroundColor = "orange";

      snakeChangeDirection.changeDirection();
    } else if (toggleNum % 2 === 1) {
      e.target.innerText = "Start Game";
      e.target.style.backgroundColor = "#24d324";

      snakeChangeDirection.stopFunction();
    }
    toggleNum++;
  });
};
