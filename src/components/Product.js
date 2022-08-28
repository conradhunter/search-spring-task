import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";

const Product = ({ product }) => {

  const salePrice = useRef();
  const price = useRef();

  const priceCheck = () => {
    if (salePrice > price) {
      return (
        <div className="prices">
          <p ref={price} className="product__price">${product.price}.00</p>
          <p ref={salePrice} className="product__msrp">${product.msrp}.00</p>
        </div>
      )
    } else {
      return (
        <div className="prices">
          <p ref={price} className="product__price">${product.price}.00</p>
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
          <FontAwesomeIcon
            className="product__cart"
            icon={faCartShopping}
          />
      </div>
    </div>
  );
};

export default Product;
