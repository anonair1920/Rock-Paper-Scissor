//class component
// import React, { Component } from "react";

// class ChoiceCard extends Component {
//   render() {
//     return (
//       <div
//         className={`choice-card ${this.props.winner ? "winner" : "loser"}
//         ${this.props.color} align-center`}
//       >
//         <h1>{this.props.title}</h1>
//         <img
//           className="card-size"
//           width="250px"
//           src={this.props.imgURL}
//           alt={this.props.title}
//         />
//         <h3>{this.props.winner ? "Won" : "Loss"}</h3>
//       </div>
//     );
//   }
// }

//function conmponent
import React from "react";
const DEFAULT_IMG =
  "https://toppng.com/uploads/preview/question-mark-icon-png-11552242877besfmcydbx.png";

function ChoiceCard(props) {
  const won = props.title === props.previousWinner;
  let className;
  const hasPreviousGame =
    props.previousWinner === "Computer" || props.previousWinner === "You";
  if (hasPreviousGame) {
    className = won ? "winner" : "loser";
  }
  let prompt;
  if (won) {
    prompt = "Won";
    className = won ? "winner" : "loser";
  } else if (props.previousWinner === "Tie") {
    prompt = "Tie";
  } else if (props.previousWinner === null) {
    prompt = "Start";
  } else {
    prompt = "Lose";
  }
  return (
    <div
      className={`choice-card ${className} ${
        props.winner ? "winner" : "loser"
      } ${props.color}`}
    >
      <h1>{props.title}</h1>
      <img
        className="card-size"
        src={props.imgURL || DEFAULT_IMG}
        alt={props.title}
      />
      <h3>{prompt}</h3>
    </div>
  );
}

export default ChoiceCard;
