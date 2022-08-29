import React from "react";

const Product = ({ product }) => {


  const priceCheck = () => {

    if (product.msrp > product.price) {
      return (
        <div className="prices">
          <p className="product__price">${product.price}.00</p>
          <p className="product__msrp">${product.msrp}.00</p>
        </div>
      )
    } else {
      return (
        <div className="prices">
          <p className="product__price">${product.price}.00</p>
        </div>
      )
    }
  }

  

  return (
    <div className="product__container">
      <img className="product__img" src={product.thumbnailImageUrl} />
      <div className="product__info">
        <p className="product__name">{product.name}</p>
        {priceCheck()}
      </div>
    </div>
  );
};

export default Product;
