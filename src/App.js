import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Pagination from "./components/Pagination";
import Products from "./components/Products";
import SearchBar from "./components/SearchBar";

function App() {
  const [dataResponse, setDataResponse] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const getData = async () => {
    const response = await fetch(
      `https://scmq7n.a.searchspring.io/api/search/search.json?siteId=scmq7n&resultsFormat=native&q=${query}&page=${page}`
    );
    const data = await response.json();
    setLoading(true);
    setDataResponse(data.results);
    setLoading(false);
    setProductsPerPage(data.pagination.perPage);
    setTotalProducts(data.pagination.totalResults);
    setTotalPages(data.pagination.totalPages);
    setQuery("");
    setPage(1);
    console.log(data);
  };

  useEffect(() => {
    getData();
    setCartCount(0);
  }, []);

  const indexOfLastProduct = page * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = dataResponse.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageNumbers) => setPage(pageNumbers);

  return (
    <div className="App">
      <SearchBar cartCount={cartCount} />
      <Products
        loading={loading}
        cartCount={cartCount}
        dataResponse={currentProducts}
      />

      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={totalProducts}
        paginate={paginate}
        totalPages={totalPages}
        page={page}
      />
      <Footer />
    </div>
  );
}

export default App;
