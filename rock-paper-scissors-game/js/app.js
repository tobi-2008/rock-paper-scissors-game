let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0
}
function playGame(playerMove) {
  const computerMove = pickComputerMove()

  let result = ''
  if (playerMove === "scissors") {
    if (computerMove === 'rock') {
      result = 'Lose'
    } else if (computerMove === 'paper') {
      result = 'Win'
    } else if (computerMove === 'scissors') {
      result = 'Tie'
    }
  } else if (playerMove === "paper") {
    if (computerMove === 'rock') {
      result = 'Win'
    } else if (computerMove === 'paper') {
      result = 'Tie'
    } else if (computerMove === 'scissors') {
      result = 'Lose'
    }
  } else if (playerMove === "rock") {
    if (computerMove === 'rock') {
      result = 'Tie'
    } else if (computerMove === 'paper') {
      result = 'Lose'
    } else if (computerMove === 'scissors') {
      result = 'Win'
    }
  }

  if (result === "Win") {
    score.wins += 1;
  } else if (result === "Lose") {
    score.losses += 1;
  } else if (result === "Tie") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();
  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(".js-moves").innerHTML = ` You 
<img src="./${playerMove}-emoji.png">
<img src="./${computerMove}-emoji.png">
Computer`

}
function updateScoreElement() {
  document.querySelector(".js-score").innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`
}

function pickComputerMove() {
  let computerMove = ''
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  }
  else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}

