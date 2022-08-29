import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./components.css";

const SearchBar = ({ searchQuery, queryWord, handleSubmit }) => {
  return (
    <form id="search__form" onSubmit={(e) => handleSubmit(e)}>
      <input
        id="input__search"
        type="text"
        placeholder="Search items, categories & brands..."
        value={queryWord}
        onChange={(e) => searchQuery(e.target.value)}
        />
      <button id="btn__search" type="submit" onSubmit={(e) => handleSubmit(e)}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </form>
  );
};

export default SearchBar;
