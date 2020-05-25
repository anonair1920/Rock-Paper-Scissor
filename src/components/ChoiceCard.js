import React from "react";

function ChoiceCard(props) {
  return (
    <div className={`choice-card ${props.color}`}>
      <h3>{props.name}</h3>
      <h1>BOX</h1>
    </div>
  );
}

export default ChoiceCard;
