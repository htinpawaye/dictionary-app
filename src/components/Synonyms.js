import React from "react";
import "../css/Synonyms.css";

export default function Synonyms(props) {
  // Check if synonyms exist AND the array is not empty
  if (props.synonyms && props.synonyms.length > 0) {
    return (
      <ul className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
