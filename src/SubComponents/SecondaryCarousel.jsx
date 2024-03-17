/* eslint-disable react/prop-types */

import React from 'react';
import './autoplaycarousel.css';
import { component } from '../assets';
const SecondaryCarousel = () => {
  const auto = React.useRef(null);
  auto.current = false;

  return (
    <div
      id="sample"
      className={`carousel-container h-[100px] my-5 w-full md:w-11/12 lg:w-4/5 ml-0 lg:ml-0 p-4   space-x-8 overflow-hidden`}
    >
      <div className="carousel-track gap-4">
        <div className=" carousel-card">
          {component.map((product) => (
            <img
              className=" object-cover transition-opacity duration-500 ease-in-out"
              key={product.id}
              src={product.img}
              alt="image"
            />
          ))}
        </div>
        <div className=" carousel-card">
          {component.map((product) => (
            <img
              className=" object-cover transition-opacity duration-500 ease-in-out"
              key={product.id}
              src={product.img}
              alt="image"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondaryCarousel;
