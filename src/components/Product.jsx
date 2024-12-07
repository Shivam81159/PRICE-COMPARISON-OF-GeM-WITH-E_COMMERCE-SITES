import React from "react";
import "./productstyle.css";

const Product = ({
  name,
  image,
  actual_price,
  discount_price,
  ratings,
  link,
}) => {
  return (
    <div className="product-card">
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="product-link"
        >
            <img src={image} alt={name} className="product-image" />
            <div className="product-info">
            <h3 className="product-name">{name}</h3>
            <div className="price-section">
                <span className="actual-price">Price: {actual_price}</span>
                <span className="discounted-price">
                Discounted Price: {discount_price}
                </span>
            </div>
            <h5 className="product-ratings">Ratings: {ratings}/5</h5>
            </div>
            <button className="buy-button">Buy Now</button>
        </a>
    </div>
    
  );
};

export default Product;
