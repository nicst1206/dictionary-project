import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <p>
          <span>
            <em>Synonyms: </em>
          </span>
          {props.synonyms.map(function (meaning, index) {
            if (index > 0) {
              return <span key="index">, {meaning}</span>;
            } else {
              return <span key="index">{meaning}</span>;
            }
          })}
        </p>
      </div>
    );
  } else {
    return null;
  }
}
