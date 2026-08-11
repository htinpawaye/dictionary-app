import React from "react";
import "../css/Meaning.css";
import Synomyns from "../components/Synomyns";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>
        <strong>Definition:</strong> {props.meaning.definition}
        {props.meaning.example && (
          <>
            <br />
            <em>
              <strong>Example:</strong> {props.meaning.example}
            </em>
            <Synomyns synonyms={props.meaning.synonyms} />
          </>
        )}
      </p>
    </div>
  );
}
