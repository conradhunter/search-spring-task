import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Products from './components/Products';
import SearchBar from './components/SearchBar';



function App() {
  
  const [dataResponse, setDataResponse] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [begin, setBegin] = useState();
  const [end, setEnd] = useState();
  const [cartCount, setCartCount] = useState(0);
  
  const getData = async () => {
    const response = await fetch(`https://scmq7n.a.searchspring.io/api/search/search.json?siteId=scmq7n&resultsFormat=native`)
    const data = await response.json();
    setDataResponse(data.results);
    setTotalPages(data.pagination.totalPages);
    setBegin(data.pagination.begin);
    setEnd(data.pagination.end);
    console.log(data);
  }

  useEffect(() => {
    getData();
    setCartCount(0);    
  }, [])

  return (
    <div className="App">
      <SearchBar cartCount={cartCount} />
      <Products cartCount={cartCount} dataResponse={dataResponse} />
      <Footer />
      
    </div>
  );
}

export default App;
