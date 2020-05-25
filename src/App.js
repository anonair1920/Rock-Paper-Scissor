import React from "react";
import "./App.css";
import ChoiceCard from "./components/ChoiceCard";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rock Paper Scissor</h1>
        <div className='container'>
        <ChoiceCard name='Computer' color="red" />
        <ChoiceCard name='Player' color="white" />
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
