import React from "react";
import "../css/Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>
        {props.meaning.definition}
        {props.meaning.example && (
          <>
            <br />
            <br />
            <em>{props.meaning.example}</em>
          </>
        )}
      </p>
    </div>
  );
}
