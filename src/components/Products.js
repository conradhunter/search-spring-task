import React from "react";
import Product from "./Product";
import './components.css';

const Products = ({ loading, currentPageApi }) => {

  if (loading) {
    return <h1>Loading...</h1>
  } else {   
    return (
      <>
      <div className="row">
        <div className="products-wrapper">
          {currentPageApi.map((product, productId) => (
            <Product currentPageApi={currentPageApi} product={product} key={productId} />
            ))}
        </div>
      </div>
    </>
  );
}

};

export default Products;
