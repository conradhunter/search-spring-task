import React from "react";
import Product from "./Product";
import './components.css';

const Products = ({ dataResponse, cartCount, loading }) => {

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <div className="row">
        <div className="products-wrapper">
          {dataResponse.map((product, productId) => (
            <Product cartCount={cartCount} dataResponse={dataResponse} product={product} key={productId} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
