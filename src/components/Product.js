import React from "react";
import placeholder from '../assets/placeholder.png';

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
          <p className="product__price" style={{color: 'black'}}>${product.price}.00</p>
        </div>
      )
    }
  }

  const insertPlaceholderImg = (event) => {
    event.target.src = placeholder;
  }

  

  return (
    <div className="product__container">
      <figure className="img__wrapper">
        <img className="product__img" src={product.thumbnailImageUrl} onError={insertPlaceholderImg} />
      </figure>
      <div className="product__info">
        <p className="product__name">{product.name}</p>
        {priceCheck()}
      </div>
    </div>
  );
};

export default Product;
