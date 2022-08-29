import { useEffect, useRef, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Pagination from "./components/Pagination";
import Products from "./components/Products";
import SearchBar from "./components/SearchBar";

function App() {
  const [dataResponse, setDataResponse] = useState([]);
  const [input, setInput] = useState('');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const getData = async () => {
    const initialResponse = await fetch(
      `https://scmq7n.a.searchspring.io/api/search/search.json?siteId=scmq7n&resultsFormat=native`);
    const data = await initialResponse.json();
    setLoading(true);
    setDataResponse(data.results);
    setLoading(false);
    setProductsPerPage(data.pagination.perPage);
    setTotalProducts(data.pagination.totalResults);
    setTotalPages(data.pagination.totalPages);
    setQuery('');
    setInput('');
  };


  useEffect(() => {
    getData();
  }, []);

// Get products for each page
  const indexOfLastProduct = page * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = dataResponse.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Logic for dynamic API
  // 1. Click new page => 2.change the page number on the api endpoint => 3.call api => 4.map data from that page

  const dynamicAPI = 'https://scmq7n.a.searchspring.io/api/search/search.json?siteId=scmq7n&resultsFormat=native' + `&page=${page}`;

  const [currentPageApi, setCurrentPageApi] = useState([]);

  const fetchDynamicAPI = async () => {
    const response = await fetch(dynamicAPI);
    const data = await response.json();
    console.log(data);
    setCurrentPageApi(data.results);
  };

  useEffect(() => {
    fetchDynamicAPI();
  }, []);




  // Change page
  const paginate = (pageNumbers) => setPage(pageNumbers);

  return (
    <div className="App">
      <SearchBar input={input} />
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={totalProducts}
        paginate={paginate}
        totalPages={totalPages}
        page={page}
        setPage={setPage}
        fetchDynamicAPI={fetchDynamicAPI}
      />
      <Products
        loading={loading}
        // dataResponse={currentProducts}
        currentPageApi={currentPageApi}
        fetchDynamicAPI={fetchDynamicAPI}
      />

      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={totalProducts}
        paginate={paginate}
        totalPages={totalPages}
        page={page}
        setPage={setPage}
      />
      <Footer />
    </div>
  );
}

export default App;
