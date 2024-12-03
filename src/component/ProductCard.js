import React from 'react';
import '../style/ProductCard.css';
 

const ProductCard = ({ title, description, price, imageUrl }) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={title} className="product-card__image" />
      <div className="product-card__details">
        <h2 className="product-card__title">{title}</h2>
        <p className="product-card__description">{description}</p>
        <p className="product-card__price">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
