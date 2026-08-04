import React, { useState } from "react";
import "../css/Result.css";

export default function Result(props) {
    return (
        <div className="Result">
            <h3 className="text-center mt-4">Definition</h3>
            <p className="text-center">{props.meaning}</p>
        </div>
    )
}