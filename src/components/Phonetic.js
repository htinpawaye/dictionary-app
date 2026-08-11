import React from "react";

export default function Phonetic(props) {
  if (props.phonetic) {
    return <p>{props.phonetic.text}</p>;
  } else {
    return null;
  }
}
