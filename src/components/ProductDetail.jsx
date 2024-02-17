import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import products from "../store/Data";
import RatingStars from "./RatingStars";

const ProductDetail = ({ onAddToCart }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const foundProduct = await getProduct(productId);
      setProduct(foundProduct);
    };

    fetchProduct();
  }, [productId]);

  const getProduct = async (productId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const foundProduct = products.find(
          (product) => product.id === parseInt(productId)
        );
        resolve(foundProduct);
      }, 1000);
    });
  };

  const handleAddToCart = async () => {
    if (product) {
      await onAddToCart(product);
      // alert("Product added to cart!");
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="px-2 pb-20 md:px-5 lg:px-24 bg-white">
      <div className="py-4">
        <button className="flex items-center space-x-1 pb-3 md:py-1 ">
          <Link to="/">
            <MdHome className="text-md" />
          </Link>
          <MdArrowForwardIos className="text-sm" />
          <Link to="/products">
            <span className="text-sm font-bold">Products</span>
          </Link>
          <MdArrowForwardIos className="text-sm" />
          <span className="text-sm font-bold text-gray-600">View Detail</span>
        </button>
      </div>
      <p className="hidden">Product ID: {productId}</p>
      <div className="grid  md:grid-cols-3 bg-white shadow-lg border-2">
        <div className="px-6">
          <img src={product.image} alt={product.name} className="w-full" />
        </div>
        <div className="px-10 py-10">
          <img
            src={product.brandLogo}
            alt={product.brandName}
            className="w-16 h-12 mb-5"
          />
          <h3 className="text-3xl font-bold mb-5">{product.name}</h3>
          <p className="text-lg mb-5">{product.description}</p>
        </div>

        <div className=" bg-gray-500">
          <div>
            <RatingStars rating={product.rating} />
            <p className="font-bold text-black text-2xl mt-2">
              {" "}
              € {product.price}
            </p>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-black text-white px-32 py-2"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
