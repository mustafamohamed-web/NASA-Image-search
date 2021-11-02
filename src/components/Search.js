import React, { useState } from "react";
import "../styles/Search.css";
import getImages from "../requests/getImages";

const Search = ({ setSearchResults }) => {
  const [value, setValue] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchResults(await getImages(value));
  };

  return (
    <>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="input-cont">
          <input
            className="search-input"
            type="text"
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="search-btn" type="submit">
            Go!
          </button>
        </div>
      </form>
    </>
  );
};

export default Search;
