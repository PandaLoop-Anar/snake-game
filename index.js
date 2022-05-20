import { snake } from "./modules/snake.module.js";
import { createApple } from "./functions/createApple.js";
import { checkApple } from "./functions/checkApple.js";
import { changeDirectionClass } from "./modules/changeDirection.module.js";
import { scoreClass } from "./modules/score.module.js";
import { eatAppleClass } from "./modules/eatApple.module.js";
import { toggleBtnFunction } from "./functions/toggleBtn.js";
import { changeAreaHeight, changeAreaWidth } from "./config/config.js";

const idOfSnake = document.getElementById("snake-cubes");
export const toggleBtn = document.getElementById("toggle-btn");
export let snakeCoordinates = [
  {
    left: 0,
    top: 0,
  },
];

export const gameScore = new scoreClass();
export let initialSnake = new snake(idOfSnake, snakeCoordinates);
export let snakeChangeDirection;
export const snakeEatApple = new eatAppleClass();
export const addNewSegment = () => {
  snakeCoordinates.push({
    left: 0,
    top: 0,
  });
};

// start/pause toggle btn function
toggleBtnFunction(0);

export const startGame = () => {
  gameScore.userScore = 0;
  gameScore.updateUserScore();
  gameScore.updateBestScore();
  snakeCoordinates = [
    {
      left: 0,
      top: 0,
    },
  ];
  initialSnake = new snake(idOfSnake, snakeCoordinates);
  initialSnake.render();
  // moving snake
  snakeEatApple.foodCoordinates = createApple();
  checkApple();

  snakeChangeDirection = new changeDirectionClass();
  snakeChangeDirection.changeDirection();
};

export const gameOver = () => {
  const finalScoreContainer = document.getElementById("final-score_num");
  const darkBackground = document.querySelector(".dark-background");
  const gameOverContainer = document.querySelector(".game-over");
  const restartBtn = document.getElementById("restart");

  finalScoreContainer.innerText = gameScore.userScore;
  darkBackground.style.display = "block";
  gameOverContainer.style.display = "flex";

  restartBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (gameScore.userScore > gameScore.bestScore) {
      gameScore.bestScore = gameScore.userScore;
    }
    gameScore.updateBestScore();

    darkBackground.style.display = "none";
    gameOverContainer.style.display = "none";

    snakeChangeDirection.stopFunction();

    toggleBtnFunction(0);
    toggleBtn.click();
  });
};

// Responsive design
// Tablet
const mediaQueryTablet = window.matchMedia("(max-width: 768px)");
function handleScreenSizeTablet(mediaQuery) {
  if (mediaQuery.matches) {
    document.body.style.backgroundColor = "yellow";
    changeAreaWidth(510);
  }
}
handleScreenSizeTablet(mediaQueryTablet);
mediaQueryTablet.addListener(handleScreenSizeTablet);
// Phone
const mediaQueryPhone = window.matchMedia("(max-width: 425px)");
function handleScreenSizePhone(mediaQuery) {
  if (mediaQuery.matches) {
    document.body.style.backgroundColor = "pink";
    changeAreaWidth(300);
    changeAreaHeight(420);
  }
}
handleScreenSizePhone(mediaQueryPhone);
mediaQueryPhone.addListener(handleScreenSizePhone);
