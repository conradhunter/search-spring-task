import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./components.css";

function handleSubmit() {}

const SearchBar = ({ cartCount }) => {
  return (
    <form id="search__form">
      <input
        id="input__search"
        type="text"
        placeholder="Search items, categories & brands..."
      />
      <button id="btn__search" onClick={handleSubmit()}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
        <h1 id="cart">Cart: <span className="cart-count">{cartCount}</span></h1>
    </form>
  );
};

export default SearchBar;
