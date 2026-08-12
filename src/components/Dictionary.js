import React, { useState } from "react";
import axios from "axios";
import "../css/Dictionary.css";
import Result from "../components/Result";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [result, setResult] = useState(null);
  let [loading, setLoading] = useState(false);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResult(response.data[0]);
  }

  function search() {
    // Fixed endpoint: change /en_US/ to /en/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch((error) => {
        console.error("Error fetching definition:", error);
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleInputChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoading(true);
    search();
  }

  if (loading) {
    return (
      <div className="Dictionary">
        <section>
          <h3>What word do you want to look up?</h3>
          <form className="mb-3 mt-3" onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Type a word..."
              onChange={handleInputChange}
              className="search form form-control form-control-lg"
            />
            <br />
            <p>i.e. paris, wine, yoga, coding</p>
          </form>
        </section>

        <Result result={result} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
