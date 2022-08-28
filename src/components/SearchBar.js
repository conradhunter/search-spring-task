import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./components.css";

function handleSubmit() {}

const SearchBar = ({ input }) => {
  return (
    <form id="search__form">
      <input
        id="input__search"
        type="text"
        placeholder="Search items, categories & brands..."
        input={input}
      />
      <button id="btn__search" onClick={handleSubmit()}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </form>
  );
};

export default SearchBar;
