import React, { useState, useRef } from "react";
import getDefinitions from "../../api/api";
import { autoCompleteSuggestions } from "../../auto-complete";
import Notes from "../../components/Result/notes";
import Result from "../../components/Result/result";

import "../../assets/css/styles.css";

export const Search = () => {
  const [wordEntered, setWordEntered] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const inputValue = useRef();

  const [response, setResponse] = useState({});
  const handleChange = (e) => {
    e.preventDefault();
    autoCompleteSuggestions(e.target.value).then((response) =>
      setFilteredData(response.results)
    );
    setWordEntered(e.target.value);
  };

  const handleSubmit = async () => {
    const data = await getDefinitions(wordEntered);
    setResponse(data);
  };

  const clearSuggestions = () => {
    setFilteredData([]);
  };

  const autoFillSuggestions = (word) => {
    setWordEntered(word);
    inputValue.current.value = word;
    clearSuggestions();
  };

  return (
    <React.Fragment>
      <div className="searchbar">
        <div className="search_input">
          <h4>Search a word:</h4>
          <input ref={inputValue} type="text" onChange={handleChange} />
          <button onClick={handleSubmit}>Search</button>
        </div>
        <div className="suggestions_wrapper" style={{position: "relative"}}>
          <div className="dataResult">
            {filteredData.slice(0, 10).map((i, key) => {
              return (
                <span
                  key={key}
                  className="dataItem"
                  onClick={() => autoFillSuggestions(i)}
                >
                  {i}
                </span>
              );
            })}
          </div>
        </div>
      </div>

      <div className="wrapper">
        <div>{response && <Result data={response || {}} />}</div>
        <div>
          <Notes />
        </div>
      </div>
    </React.Fragment>
  );
};
