import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);
  let defaultWordValue = `i.e. ${props.defaultKeyword}`;

  function handleResponse(response) {
    setResults(response.data);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiKey = "obbt00a19b0447e3fbfabf89040f3c88";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    setLoaded(true);

    const imagesApiKey = "obbt00a19b0447e3fbfabf89040f3c88";
    let imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imagesApiKey}`;
    axios.get(imagesApiUrl).then(handlePexelsResponse);
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    search();
  }
}
