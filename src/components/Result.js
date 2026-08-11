import React, { useState } from "react";
import "../css/Result.css";
import Meaning from "../components/Meaning";

export default function Result(props) {
  if (props.result) {
    return (
      <div className="Result">
        <h3 className="mt-4">{props.result.word}</h3>
        {props.result.meanings.map(function (meaning, index) {
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
