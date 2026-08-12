import React from "react";
import "../css/Meaning.css";
import Synonyms from "../components/Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition">{definition.definition}</div>
            <div className="example">
              <em>{definition.example}</em>
            </div>
          </div>
        );
      })}
      <div className="synonyms">
        {props.meaning.synonyms && props.meaning.synonyms.length > 0 && (
          <strong>Similar: </strong>
        )}
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}
