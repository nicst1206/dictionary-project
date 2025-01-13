import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <section className="Meaning">
      <h5>{props.meaning.partOfSpeech}</h5>
      <div className="WordDefinition">{props.meaning.definition}</div>

      <div className="WordExample">
        <em>{props.meaning.example}</em>
      </div>
      <Synonyms synonyms={props.meaning.synonyms} />
    </section>
  );
}
