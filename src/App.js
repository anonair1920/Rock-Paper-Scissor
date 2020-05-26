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
import { CHOICES, getRoundOutcome } from "./utils";
import ChoiceButtons from "./components/ChoiceButtons";
import Login from "./components/Login";
import Footer from './components/Footer';

function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [previousWinner, setPreviousWinner] = useState(null);
  const [prompt, setGamePrompt] = useState("1, 2, 3, SHOOT!");
  const [gameHistory, setGameHistory] = useState([]);

  let onPlayerChoose = (playerChoice) => {
    const [result, compChoice] = getRoundOutcome(playerChoice);
    const newUserChoice = CHOICES[playerChoice];
    const newComputerChoice = CHOICES[compChoice];
    setPlayerChoice(newUserChoice);
    setComputerChoice(newComputerChoice);

    if (result === "Victory!") {
      setPreviousWinner("You");
    } else if (result === "Defeat!") {
      setPreviousWinner("Computer");
    } else {
      setPreviousWinner("Tie");
    }

    console.log(
      "result: ",
      result,
      "computer's Choice: ",
      compChoice,
      "user's choice: ",
      playerChoice
    );

    setGamePrompt(result);
    gameHistory.unshift(result);
    setGameHistory(gameHistory);
  };

  return (
    <div className="App">
      <div className="container-large ">
        <Login />
        <div className="bigbox mt-5 mb-5">
          <ChoiceCard
            className="col-4"
            title="You"
            color="white"
            winner={true}
            previousWinner={previousWinner}
            imgURL={playerChoice && playerChoice.url}
          />
          <div className="col-4">
            <h2 className="an-slide-bottom an-text-carousel mb-4">{prompt}</h2>
            <div>
              <ChoiceButtons onPlayerChoose={onPlayerChoose} />
            </div>
          </div>
          <ChoiceCard
            className="col-4"
            title="Computer"
            color="red"
            winner={false}
            previousWinner={previousWinner}
            imgURL={computerChoice && computerChoice.url}
          />
        </div>
      </div>
      <div className="historyBox">
        <List />
        <ul>
          {gameHistory.map((result) => {
            return <li>{result}</li>;
          })}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default App;
