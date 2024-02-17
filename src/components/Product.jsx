
import React, { useState } from "react";
import {  Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { MdHome } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import Buttons from "./Buttons";
import Search from "./Search";
import Ads from "./Ads";

const Product = ({ products, onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedBrand(null);
    setSearchQuery("");
  };

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      !selectedCategory || product.category === selectedCategory;
    const brandMatch = !selectedBrand || product.brandName === selectedBrand;
    const searchMatch =
      !searchQuery ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase());

    return categoryMatch && brandMatch && searchMatch;
  });

  return (
    <>
      <Ads/>
      <main className=" px-2 md:px-5 lg:px-24">
        {/* <div className="bg-red-500">back to Home</div> */}
        <div className="md:flex justify-between items-center py-3 ">
          <div>
            <Link to="/">
              <button className="flex items-center space-x-1 pt-2 pb-3 md:py-0 ">
                <MdHome className="text-md" />
                <MdArrowForwardIos className="text-sm" />
                <span className="text-sm font-bold">Products</span>
              </button>
            </Link>
          </div>
          <div className="relative ">
            <Search onSearch={handleSearch} className="absolute " />
            <FaSearch className="absolute top-3 right-2 text-lg text-gray-500" />
          </div>
        </div>

        <div className="md:flex  ">
          <div>
            <Buttons
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
              selectedBrand={selectedBrand}
              onBrandChange={handleBrandChange}
            />
          </div>
          <div className="grid grid-cols-1 ">
            <h1 className="py-2 md:px-2 lg:px-10 text-[1.2rem]  md:text-[1.5rem] font-bold tracking-wide">
              All Products
            </h1>
            <div className="md:px-2 grid grid-cols-2 md:grid-cols-3  lg:pl-10 gap-1 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Product;
