import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <h6>
          <em>Synonyms:</em>
        </h6>
        <p>
          {props.synonyms.map(function (meaning, index) {
            return <span key="index">{meaning}, </span>;
          })}
        </p>
      </div>
    );
  } else {
    return null;
  }
}
