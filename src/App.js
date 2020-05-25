import React from "react";
import "./App.css";
import ChoiceCard from "./components/ChoiceCard";
import List from "./components/List";
const choices = {
  rock: "https://www.clipartmax.com/png/middle/356-3561104_cartoon-rock-paper-scissors.png",
  paper: "https://www.clipartmax.com/png/middle/149-1498962_cartoon-emoji-paper-rock-scissors-icon-rock-paper-scissors-emoji.png",
  scissor: "https://www.clipartmax.com/png/middle/151-1517270_scissors-cartoon-cartoon-rock-paper-scissors.png"
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rock Paper Scissor</h1>
        <div className='container'>
        <ChoiceCard title='Computer' color="red" winner={false} imgURL={choices.rock}/>
        <ChoiceCard title='Player' color="white" winner={true} imgURL={choices.paper}/>
        </div>
        <ul>
          <List />
          <List />
          <List />
        </ul>
      </header>
    </div>
  );
}

export default App;
