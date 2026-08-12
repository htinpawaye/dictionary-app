import React, { useState } from "react";
import axios from "axios";
import "../css/Dictionary.css";
import Result from "../components/Result";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [result, setResult] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResult(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Fixed endpoint: change /en_US/ to /en/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch((error) => {
        console.error("Error fetching definition:", error);
      });
  }

  function handleInputChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form className="mb-3 mt-3" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type a word..."
          onChange={handleInputChange}
          className="search"
        />
      </form>
      <Result result={result} />
    </div>
  );
}
