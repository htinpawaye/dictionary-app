import React from "react";
import "../css/Result.css";
import Meaning from "../components/Meaning";
import Phonetic from "../components/Phonetic";

export default function Result(props) {
  if (props.result) {
    return (
      <div className="Result">
        <h3 className="mt-4">{props.result.word}</h3>

        {/* Use phonetics (plural) with optional chaining ?. */}
        {props.result.phonetics?.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetic phonetic={phonetic} />
            </div>
          );
        })}

        {props.result.meanings?.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
