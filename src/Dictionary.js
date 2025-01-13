import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let defaultWordValue = `i.e. ${props.defaultKeyword}`;

  function handleResponse(response) {
    setResults(response.data);
  }

  function search() {
    let apiKey = "obbt00a19b0447e3fbfabf89040f3c88";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    setLoaded(true);
  }

  function changeKeyword(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <h3>What word would you like to look for?</h3>
        <form onSubmit={handleSubmit}>
          <input
            className="searchForm"
            type="search"
            autoFocus={true}
            onChange={changeKeyword}
            defaultValue={defaultWordValue}
          ></input>
          <input className="searchButton" type="submit" value="Search"></input>
        </form>
        <Results results={results} />
      </div>
    );
  } else {
    search();
  }
}
