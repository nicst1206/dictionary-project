import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h5>{props.meaning.partOfSpeech}</h5>
      <br />
      <p>{props.meaning.definition}</p>
      <br />
      <p>
        <em>{props.meaning.example}</em>
      </p>
    </div>
  );
}
