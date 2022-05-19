
export class scoreClass {
    _userScoreId = document.getElementById("user-score_num");
    _bestScoreId = document.getElementById("best-score_num");

    bestScore=0;
    userScore=0;

    updateUserScore = () => {
      this._userScoreId.innerText = this.userScore;
    };
    updateBestScore = () => {
      this._bestScoreId.innerText = this.bestScore;
    };
  }