import React, { useState } from "react";
import "./search.scss";

function Search(props) {
  const [keyword, setKeyword] = useState("");
  const inputOnChange = (event) => {
    setKeyword(event.target.value);
  };
  return (
    <div className="search-menu">
      <input
        onChange={inputOnChange}
        type="text"
        placeholder="Search..."
        className="search-data"
      ></input>
      <button onClick={() => props.search(keyword)}>Search</button>
    </div>
  );
}

export default Search;
