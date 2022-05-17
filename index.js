import { snake } from "./modules/snake.module.js";
import { changeDirection } from "./functions/changeDirection.js";
import { createApple } from "./functions/createApple.js";
import { checkApple } from "./functions/checkApple.js";

const idOfSnake = document.getElementById("snake-cubes");
const userScoreContainer = document.getElementById("user-score_num");
const bestScoreContainer = document.getElementById("best-score_num");

let bestScore = 0;
let userScore = 0;
const updateUserScore = () => {
  userScoreContainer.innerText = userScore;
};
const updateBestScore = () => {
  bestScoreContainer.innerText = bestScore;
};
// updateUserScore();

export let snakeCoordinates = [
  {
    left: 0,
    top: 0,
  },
];

export let initialSnake = new snake(idOfSnake, snakeCoordinates);
// initialSnake.render();
// // moving snake
changeDirection();

// creating food
export let foodCoordinates = createApple();

// check apple is in the mouth of snake or not
// checkApple();

export const eatApple = () => {
  // create Apple
  foodCoordinates = createApple();
  // update Score
  userScore++;
  updateUserScore();
  // add New Segment to increase snake size
  addNewSegment();
};

const addNewSegment = () => {
  snakeCoordinates.push({
    left: 0,
    top: 0,
  });
};

export const gameOver = () => {
  const finalScoreContainer = document.getElementById("final-score_num");
  const darkBackground = document.querySelector(".dark-background");
  const gameOverContainer = document.querySelector(".game-over");
  const restartBtn = document.getElementById("restart");

  finalScoreContainer.innerText = userScore;
  darkBackground.style.display = "block";
  gameOverContainer.style.display = "flex";

  restartBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (userScore > bestScore) {
      bestScore = userScore;
    }
    startGame();

    darkBackground.style.display = "none";
    gameOverContainer.style.display = "none";
  });
};

const startGame = () => {
  userScore = 0;
  updateUserScore();
  updateBestScore();
  snakeCoordinates = [
    {
      left: 0,
      top: 0,
    },
  ];
  initialSnake = new snake(idOfSnake, snakeCoordinates);
  initialSnake.render();
  // moving snake
  foodCoordinates = createApple();
  checkApple();

  // let snake = new snake();

  // move
  // change Direction
  // check apple

  // die
};
startGame();

// createSnake
// createApple

// setInterval(game, 100)
