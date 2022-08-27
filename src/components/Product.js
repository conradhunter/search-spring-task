import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Product = ({ product }) => {
  

  return (
    <div className="product__container">
      <img className="product__img" src={product.thumbnailImageUrl} />
      <div className="product__info">
        <p className="product__name">{product.name}</p>
        <div className="prices">
          <p className="product__price">${product.price}.00</p>
          <p className="product__msrp">${product.msrp}.00</p>
        </div>
          <FontAwesomeIcon
            className="product__cart"
            icon={faCartShopping}
          />
      </div>
    </div>
  );
};

export default Product;
