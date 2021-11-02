import React from "react";
import "../styles/SearchResults.css";

const SearchResults = ({ searchResults }) => {
  if (!searchResults) {
    return null;
  }
  if (!searchResults.length) {
    <p>No results</p>;
  }
  return (
    <div className="search-results">
      <div className="search-results__wrapper">
        {searchResults.map((image, index) => (
          <a
            href={image}
            target="_blank"
            rel="noreferrer"
            key={index}
            data-fancybox="gallery"
          >
            <img
              key={image}
              className="search-results__card-image"
              src={image}
              alt={image}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
