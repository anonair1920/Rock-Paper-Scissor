import React from "react";

export default function ChoiceButtons(props) {
  return (
    <div className='container d-flex justify-content-around'>
      <button
        className="btn btn-danger btn-lg"
        onClick={() => props.onPlayerChoose("rock")}
      >
        Rock
      </button>
      <button
        className="btn btn-danger btn-lg"
        onClick={() => props.onPlayerChoose("paper")}
      >
        Paper
      </button>
      <button
        className="btn btn-danger btn-lg"
        onClick={() => props.onPlayerChoose("scissors")}
      >
        Scissors
      </button>
    </div>
  );
}
