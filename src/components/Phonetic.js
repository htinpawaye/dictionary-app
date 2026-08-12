import React from "react";
import "../css/Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <div className="Phonetic">
        <a
          href={props.phonetic.audio}
          target="_blank"
          rel="noreferrer"
          className="text-decoration-none"
        >
          Listen
        </a>
        <span> {props.phonetic.text}</span>
      </div>
    );
  } else {
    return null;
  }
}
