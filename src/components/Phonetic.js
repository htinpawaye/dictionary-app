import React from "react";

export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <div className="Phonetic">
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          Listen
        </a>
        <br />
        <span> {props.phonetic.text}</span>
      </div>
    );
  } else {
    return null;
  }
}
