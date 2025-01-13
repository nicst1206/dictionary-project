import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section className="topWord">
          <h2>{props.results.word}</h2>
          <span className="Phonetic">{props.results.phonetic}</span>
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return <Meaning meaning={meaning} key={index} />;
        })}
      </div>
    );
  } else {
    return null;
  }
}
