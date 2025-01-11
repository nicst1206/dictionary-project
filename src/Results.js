import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h3>{props.results.word}</h3>
        {props.results.meanings.map(function (meaning, index) {
          return <Meaning meaning={meaning} key={index} />;
        })}
      </div>
    );
  } else {
    return null;
  }
}
