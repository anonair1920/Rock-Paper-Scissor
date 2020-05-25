export const CHOICES = {
  scissors: {
    name: "scissors",
    url:
      "https://www.clipartmax.com/png/middle/151-1517270_scissors-cartoon-cartoon-rock-paper-scissors.png",
  },
  paper: {
    name: "paper",
    url:
      "https://www.clipartmax.com/png/middle/149-1498962_cartoon-emoji-paper-rock-scissors-icon-rock-paper-scissors-emoji.png",
  },
  rock: {
    name: "rock",
    url:
      "https://www.clipartmax.com/png/middle/356-3561104_cartoon-rock-paper-scissors.png",
  },
};

export const getRoundOutcome = (userChoice) => {
  const computerChoice = getRandomChoice().name;
  let result;

  if (userChoice === "rock") {
    result = computerChoice === "scissors" ? "Victory!" : "Defeat!";
  }
  if (userChoice === "paper") {
    result = computerChoice === "rock" ? "Victory!" : "Defeat!";
  }
  if (userChoice === "scissors") {
    result = computerChoice === "paper" ? "Victory!" : "Defeat!";
  }

  if (userChoice === computerChoice) result = "Tie game!";
  return [result, computerChoice];
};

export const getRandomChoice = () => {
  let choiceNames = Object.keys(CHOICES);
  let randomIndex = Math.floor(Math.random() * 3);
  let choiceName = choiceNames[randomIndex];
  return CHOICES[choiceName];
};
