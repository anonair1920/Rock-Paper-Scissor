//class component
// import React, { Component } from "react";

// class ChoiceCard extends Component {
//   render() {
//     return (
//       <div className={`choice-card ${this.props.winner ? "winner" : "loser"}`}>
//         <h1>{this.props.title}</h1>
//         <img className="card-size" src={this.props.imgURL} alt={this.props.title} />
//         <h3>{this.props.winner ? "Won" : "Loss"}</h3>
//       </div>
//     );
//   }
// }

//function conmponent
import React from "react";

function ChoiceCard(props) {
  return (
    <div className={`choice-card ${props.winner ? "winner" : "loser"} ${props.color}`}>
      <h1>{props.title}</h1>
      <img className="card-size" src={props.imgURL} alt={props.title} />
      <h3>{props.winner ? "Won" : "Loss"}</h3>
    </div>
  );
}

export default ChoiceCard;
