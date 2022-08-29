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
  const [totalPages, setTotalPages] = useState(0);
  const [currentPageApi, setCurrentPageApi] = useState([]);

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
    setTotalPages(data.pagination.totalPages);
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

  function catergorySearch(e) {
    setQuery(e.target.value);
    setPage(1);
  }

  return (
    <div className="App">
      <Nav catergorySearch={catergorySearch} />
      <SearchBar
        searchQuery={handleChange}
        queryWord={input}           
        handleSubmit={handleSubmit}
      />
      <Pagination
        totalPages={totalPages}
        page={page}
        setPage={setPage}
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
      />
      <Footer />
    </div>
  );
}

export default App;
