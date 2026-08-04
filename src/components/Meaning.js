import React, { useState } from "react";
import "../css/Meaning.css";

export default function Meaning(props) {
    return (
        <div className="Meaning">
            <h3 className="text-center mt-4">Definition</h3>
            <p className="text-center">{props.meaning}</p>
        </div>
    )
}