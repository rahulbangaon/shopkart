import React from "react";
import './style.css';
import {FiArrowUpRight} from 'react-icons/fi';

const Product = ({image,title,description,price}) => {
    const shortDescription = description.substr(0,118);
    const shorttitle = title.substr(0,23);

  return (
    <>
      <div className="product">
        <div className="image-container">
          <img className="product-image" src={image} alt={title} />
          <button className="arrow-btn"><FiArrowUpRight className="arrow-icon fs-500"/></button>
        </div>
        <div className="details-container">
          <h3 className="product-title ff-syne fs-400">{shorttitle}</h3>
          <p className="product-description ff-work-sans fs-300">
            {shortDescription}
          </p>
          <span className="product-price ff-syne  fs-400">${price}</span>
        </div>
      </div>
    </>
  );
};

export default Product;
