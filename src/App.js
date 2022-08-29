import { useEffect, useRef, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Pagination from "./components/Pagination";
import Products from "./components/Products";
import SearchBar from "./components/SearchBar";

function App() {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPageApi, setCurrentPageApi] = useState([]);
  const [productsPerPage, setProductsPerPage] = useState(0);
  const [resultsLength, setResultsLength] = useState(0);

  const fetchDynamicAPI = async () => {
    setLoading(true);
    const dynamicPageAPI =
      "https://scmq7n.a.searchspring.io/api/search/search.json?siteId=scmq7n&resultsFormat=native" +
      `&q=${query}` +
      `&page=${page}`;
    const response = await fetch(dynamicPageAPI);
    const data = await response.json();
    setCurrentPageApi(data.results);
    setLoading(false);
    setTotalProducts(data.pagination.totalResults);
    setTotalPages(data.pagination.totalPages);
    setProductsPerPage(data.pagination.perPage);
    setResultsLength(data.results.length);
    setInput("");
    console.log(data);
  };

  useEffect(() => {
    fetchDynamicAPI();
  }, [query, page]);

  function handleChange(value) {
    setInput(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setQuery(input);
    setInput('');
    setPage(1);
  }

  return (
    <div className="App">
      <Nav />
      <SearchBar
        searchQuery={handleChange} // setKeyword={handleChange}
        queryWord={input}           // keyword={input}
        handleSubmit={handleSubmit} // handleSubmit={handleSubmit} 
      />
      <Pagination
        totalPages={totalPages}
        page={page}
        setPage={setPage}
        totalProducts={totalProducts}
        productsPerPage={productsPerPage}
        resultsLength={resultsLength}
      />
      <Products
        loading={loading}
        currentPageApi={currentPageApi}
        fetchDynamicAPI={fetchDynamicAPI}
      />

      <Pagination
        totalPages={totalPages}
        page={page}
        setPage={setPage}
        totalProducts={totalProducts}
        productsPerPage={productsPerPage}
        resultsLength={resultsLength}
      />
      <Footer />
    </div>
  );
}

export default App;
