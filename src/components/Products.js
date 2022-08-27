import React from "react";
import Product from "./Product";
import './components.css';

const Products = ({ dataResponse, cartCount }) => {
  return (
    <>
      <div className="row">
        <div className="products-wrapper">
          {dataResponse.map((product, i) => (
            <Product cartCount={cartCount} dataResponse={dataResponse} product={product} key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
