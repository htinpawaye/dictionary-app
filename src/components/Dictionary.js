import React, { useState } from "react";
import axios from "axios";
import "../css/Dictionary.css";
import Result from "../components/Result";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [result, setResult] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setResult(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Oxford Dictionaries API
    let appId = `bf3f9f396370566c3abta48aeo525af1`; // Replace with your app_id
    let appKey = `bf3f9f396370566c3abta48aeo525af1`; // Replace with your app_key
    let apiUrl = `https://api.oxforddictionaries.com/api/v2/entries/en-gb/${keyword}`;

    axios
      .get(apiUrl, {
        headers: {
          app_id: appId,
          app_key: appKey,
        },
      })
      .then(handleResponse)
      .catch((error) => console.error("Error fetching data: ", error));
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
