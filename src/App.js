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

function App() {
  const [prompt, setGamePrompt] = useState("1, 2, 3, SHOOT!");
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rock Paper Scissor</h1>
        <div className="container-large ">
          <div className="bigbox">
            <ChoiceCard
              title="Computer"
              color="red"
              winner={false}
              imgURL={choices.rock}
            />
            <h1>{prompt}</h1>
            <ChoiceCard
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
      </header>
    </div>
  );
}

export default App;
