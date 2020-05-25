//class component
// import React, { Component } from "react";
// import "./App.css";
// import ChoiceCard from "./components/ChoiceCard";
// import List from "./components/List";
// const choices = {
//   rock:
//     "https://www.clipartmax.com/png/middle/356-3561104_cartoon-rock-paper-scissors.png",
//   paper:
//     "https://www.clipartmax.com/png/middle/149-1498962_cartoon-emoji-paper-rock-scissors-icon-rock-paper-scissors-emoji.png",
//   scissor:
//     "https://www.clipartmax.com/png/middle/151-1517270_scissors-cartoon-cartoon-rock-paper-scissors.png",
// };

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <h1>Rock Paper Scissor</h1>
//           <div className="d-flex">
//             <ChoiceCard
//               title="Computer"
//               color="red"
//               winner={false}
//               imgURL={choices.rock}
//             />
//             <ChoiceCard
//               title="Player"
//               color="white"
//               winner={true}
//               imgURL={choices.paper}
//             />
//           </div>
//           <ul>
//             <List />
//           </ul>
//         </header>
//       </div>
//     );
//   }
// }

//function component

import React, { useState } from "react";
import "./App.css";
import ChoiceCard from "./components/ChoiceCard";
import List from "./components/List";
const choices = {
  rock:
    "https://www.clipartmax.com/png/middle/356-3561104_cartoon-rock-paper-scissors.png",
  paper:
    "https://www.clipartmax.com/png/middle/149-1498962_cartoon-emoji-paper-rock-scissors-icon-rock-paper-scissors-emoji.png",
  scissor:
    "https://www.clipartmax.com/png/middle/151-1517270_scissors-cartoon-cartoon-rock-paper-scissors.png",
};

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
function App() {
  const [prompt, setGamePrompt] = useState("1, 2, 3, SHOOT!");
  let onPlayerChoose = (playerChoice) => {
    const [result, compChoice] = getRoundOutcome(playerChoice);
    console.log(
      "result: ",
      result,
      "computer's Choice: ",
      compChoice,
      "user's choice: ",
      playerChoice
    );
  };
  return (
    <div className="App">
      <h1 className="an-text-carousel an-slide-bottom">Rock Paper Scissor</h1>
      <div className="container-large ">
        <div className="bigbox mt-5 mb-5">
          <ChoiceCard
            className="col-4"
            title="Computer"
            color="red"
            winner={false}
            imgURL={choices.rock}
          />
          <div className="col-4">
            <h2 className="an-text-carousel mb-4">{prompt}</h2>
            <div className="container d-flex justify-content-around">
              <button
                className="btn btn-danger btn-lg"
                onClick={() => onPlayerChoose("rock")}
              >
                Rock
              </button>
              <button
                className="btn btn-danger btn-lg"
                onClick={() => onPlayerChoose("paper")}
              >
                Paper
              </button>
              <button
                className="btn btn-danger btn-lg"
                onClick={() => onPlayerChoose("scissors")}
              >
                Scissors
              </button>
            </div>
          </div>
          <ChoiceCard
            className="col-4"
            title="Player"
            color="white"
            winner={true}
            imgURL={choices.paper}
          />
        </div>
      </div>
      <ul>
        <List />
      </ul>
    </div>
  );
}

export default App;
