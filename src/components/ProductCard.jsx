
import React from "react";
import { Link } from "react-router-dom";
import RatingStars from "./RatingStars";
import { FiShoppingCart } from "react-icons/fi";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="h-full">
      <div className="border-2 shadow-lg h-full">
        <div className="bg-white h-full">
          <Link to={`/product/${product.id}`}>
            <div className="px-2 md:px-3 lg:px-5">
              <img
                className="w-full px-2 md:px-3 lg:px-5"
                src={product.image}
                alt={product.image}
              />
              <img
                className="w-7 h-5 md:w-7 lg:w-8"
                src={product.brandLogo}
                alt={product.brandLogo}
              />
              <h4 className="card-text md:font-bold text-gray-500 tracking-wider my-1 md:my-1 text-[13px] lg:text-sm">
                {product.name}
              </h4>
              <div className="hidden lg:flex">
                <RatingStars rating={product.rating} />
              </div>
            </div>
          </Link>

          <div className="px-2 md:px-3 lg:px-5 flex flex-col lg:flex-row justify-between md:mb-3 lg:my-4 whitespace-nowrap">
            <span className="product-price text-sm md:text-[1rem] lg:text-lg font-bold mr-3 md:mb-1">
              € {product.price}
            </span>
            <button
              className="btn my-2 md:my-0"
              onClick={() => onAddToCart(product)}
            >
              <div className="py-1 flex justify-center rounded-md space-x-2 border-2 items-center text-gray-500 border-gray-300 px-2 md:px-3 md:py-1 hover:border-black hover:text-black">
                <FiShoppingCart className="text-sm" />
                <span className="text-sm tracking-wide">Add to cart</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
