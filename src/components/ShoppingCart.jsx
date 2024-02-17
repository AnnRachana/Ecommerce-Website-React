
import React from "react";
import "../style/shoppingCart.css";
import { FaRegWindowClose } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { HiPlus } from "react-icons/hi";
import { HiMinus } from "react-icons/hi";

const MAX_QUANTITY = 10;

function ShoppingCart({
  visibility,
  products,
  onProductRemove,
  onClose,
  onQuantityChange,
}) {
  return (
    <div
      className="modal"
      style={{
        display: visibility ? "block" : "none",
      }}
    >
      <div className="shoppingCart bg-gray-200">
        <div className="header bg-white">
          <h2 className="font-bold tracking-wide text-lg">Shopping cart</h2>
          <button className="btn close-btn" onClick={onClose}>
            <FaRegWindowClose className="text-red-500" size={30} />
          </button>
        </div>
        <div className="cart-products">
          {products.length === 0 && (
            <span className="empty-text">Your basket is currently empty</span>
          )}
          {products.map((product) => (
            <div className="cart-product bg-white px-2 py-3" key={product.id}>
              <div className="grid grid-cols-2 ">
                <div className="pr-2 md:pr-5 ">
                  <img
                    className="w-32 md:w-40"
                    src={product.image}
                    alt={product.name}
                  />
                </div>

                <div className=" grid grid-cols-1  ">
                  <div>
                    <div className="grid gap-y-1 ">
                      <div>
                        <img
                          className="w-6 md:w-7 md:mt-2 lg:mt-2"
                          src={product.brandLogo}
                          alt={product.brandLogo}
                        />
                      </div>
                      <h3 className="card-text-cart text-sm md:text-md pt-1 pr-3">
                        {product.name}
                      </h3>
                      <span className="font-bold text-[0.9rem]  md:text-[1rem] mb-1 lg:mb-4">
                        € {product.price * product.count}
                      </span>
                    </div>

                    <div className=" flex justify-between">
                      <div className="flex items-center">
                        <button
                          className="px-1 py-1 rounded-l bg-gray-200 hover:bg-gray-300 focus:outline-none"
                          onClick={() =>
                            onQuantityChange(
                              product.id,
                              Math.max(product.count - 1, 0)
                            )
                          }
                        >
                          <HiMinus />
                        </button>
                        <input
                          type="text"
                          className="px-1  text-center w-9 md:w-10 border-t border-b border-gray-300 appearance-none focus:outline-none"
                          value={product.count === 0 ? "0" : product.count}
                          onChange={(event) => {
                            let newValue = event.target.value.trim();

                            if (newValue === "" || isNaN(newValue)) {
                              newValue = "0";
                            }
                            onQuantityChange(product.id, parseInt(newValue));
                          }}
                        />
                        <button
                          className="px-1 py-1 rounded-r bg-gray-200 hover:bg-gray-300 focus:outline-none"
                          onClick={() =>
                            onQuantityChange(product.id, product.count + 1)
                          }
                        >
                          <HiPlus />
                        </button>
                      </div>

                      <button
                        className="btn remove-btn mr-0 md:mr-7"
                        onClick={() => onProductRemove(product)}
                      >
                        <RiDeleteBin6Line size={20} className="text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {products.length > 0 && (
            <button className="btn checkout-btn rounded-lg tracking-wider ">
              Proceed to checkout
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;

