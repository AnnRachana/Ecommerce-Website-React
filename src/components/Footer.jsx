import React from "react";
import { BsPhone } from "react-icons/bs";
import { BsChatText } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="bg-white px-5  tracking-wide lg:px-36">
        <div className=" grid gap-4 border-t border-b-gray-400  sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 ">
          <div
            className="bg-white px-20 py-10 text-center grid place-items-center
          "
          >
            <img
              src="https://magento.sportshop.com/media/logo/usp-cart.svg"
              alt="footerpic"
            />
            <h1 className="font-bold mt-5 tracking-wide">LARGE ASSORTMENT</h1>
            <p className="text-sm">
              Huge assortment with more than 21.000+ articles
            </p>
          </div>

          <div
            className="bg-white px-20 py-10 text-center grid place-items-center
          "
          >
            <img
              src="https://magento.sportshop.com/media/logo/usp-thumb.svg"
              alt="footerpic"
            />
            <h1 className="font-bold mt-5 tracking-wide">PASSION FOR SPORT</h1>
            <p className="text-sm">
              Passion for the sport. Our specialists have an answer to your
              questions.
            </p>
          </div>

          <div
            className="bg-white px-20 py-10 text-center grid place-items-center
          "
          >
            <img
              className=" w-14"
              src="https://magento.sportshop.com/media/logo/usp-rma.svg"
              alt="footerpic"
            />
            <h1 className="font-bold mt-5 tracking-wide">FAST SHIPMENT</h1>
            <p className="text-sm">Orders are shipped on the day of ordering</p>
          </div>
        </div>
      </div>

      <div className="bg-black text-white px-5 lg:px-36">
        <div className="grid gap-4 my-10  sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 ">
          <div>
            <h2 className="grid text-1xl font-bold my-6 ">
              HOW CAN WE HELP YOU?
            </h2>
            <div className="grid text-base text-gray-50">
              <a href="#" className="py-2 text-sm">
                Customer Service
              </a>
              <a href="#" className="py-2 text-sm">
                Printing and embroidery
              </a>
              <a href="#" className="py-2 text-sm">
                Frequently Asked Questions
              </a>
              <a href="#" className="py-2 text-sm">
                Delivery time and costs
              </a>
              <a href="#" className="py-2 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="py-2 text-sm">
                {" "}
                Warranty
              </a>
              <a href="#" className="py-2 text-sm">
                {" "}
                Returns
              </a>
              <a href="#" className="py-2 text-sm">
                {" "}
                Cookies
              </a>
            </div>
          </div>

          <div>
            <h2 className="grid text-1xl font-bold my-6 ">ABOUT US</h2>
            <div className="grid text-base text-gray-50">
              <a href="#" className="py-2 text-sm">
                About us
              </a>
              <a href="#" className="py-2 text-sm">
                Contact
              </a>
              <a href="#" className="py-2 text-sm">
                Service
              </a>
            </div>
            <h2 className="grid text-1xl font-bold my-6 ">OUR SHOPS</h2>
            <div className="grid text-base text-gray-50">
              <a href="#" className="py-2 text-sm">
                Sportshop.com
              </a>
              <a href="#" className="py-2 text-sm">
                TennisDirect.com
              </a>
              <a href="#" className="py-2 text-sm">
                PadelDirect.com
              </a>
              <a href="#" className="py-2 text-sm">
                Handballshop.com
              </a>
              <a href="#" className="py-2 text-sm">
                Footballdirect.com
              </a>
            </div>
          </div>

          <div>
            <h2 className="grid text-1xl font-bold my-6 ">CHOOSE YOUR SPORT</h2>
            <div className="grid text-base text-gray-50">
              <a href="#" className="py-2 text-sm">
                Running
              </a>
              <a href="#" className="py-2 text-sm">
                Basketball
              </a>
              <a href="#" className="py-2 text-sm">
                Handball
              </a>
              <a href="#" className="py-2 text-sm">
                Field Hockey
              </a>
              <a href="#" className="py-2 text-sm">
                Volleyball
              </a>
              <a href="#" className="py-2 text-sm">
                Padel
              </a>
              <a href="#" className="py-2 text-sm">
                Tennis
              </a>
              <a href="#" className="py-2 text-sm">
                Korfball
              </a>
            </div>
          </div>

          <div>
            <h2 className="grid text-1xl font-bold my-6 ">ADVICE</h2>
            <div className="grid text-base text-gray-50 ">
              <p className="mb-5">
                Our customer service is today open until 21.00 hours
              </p>
              <div className="py-2 text-sm flex place-content-start grid-cols-2">
                <div className="text-4xl text-gray-500 p-1">
                  <BsPhone />
                </div>
                <div className="ml-2 ">
                  <h3>Printing and embroider</h3>
                  <a href="#" className="font-bold  text-xs">
                    +12321312321
                  </a>
                </div>
              </div>
              <div className="py-2 text-sm flex place-content-start grid-cols-2">
                <div className="text-3xl text-gray-500 p-1">
                  <BsChatText />
                </div>
                <div className="ml-3 ">
                  <h3>Printing and embroider</h3>
                  <a href="#" className="font-bold  text-xs">
                    +12321312321
                  </a>
                </div>
              </div>
            </div>
            <h2 className="grid text-1xl font-bold my-6 ">NEWSLETTER</h2>
            <label className="relative flex justify-between bg-stone-900 ">
              <input
                className=" placeholder:text-stone-400 bg-stone-900  block w-full  py-2 pl-5 pr-3 shadow-sm focus:outline-none focus:ring-1 sm:text-sm"
                placeholder=" Volleyball Padel Tennis Korfball ADVICE Our customer service is today open until 21.00 hours  For advice call"
                type="text"
                name="search"
              />
              <a href="#" className="px-5 py-2 font-bold text-sm">
                {" "}
                SUBSCRIBE
              </a>
            </label>
          </div>
        </div>
        <div className="bg-black text-white py-10 ">
          <div className="grid gap-4  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 ">
            <div className=" grid  place-items-center lg:place-items-start">
              <img
                src="https://magento.sportshop.com/media/logo/payment-logo/en-pay.svg"
                alt="footervisa"
                className="w-60 lg:w-64 "
              />
            </div>

            <div className=" grid place-items-center lg:place-items-end">
              <div className="flex w-16 justify-between text-xl text-stone-300">
                <FaInstagram />
                <FaFacebookF />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" text-zinc-600 px-5 lg:px-36">
        <div className="grid gap-4 mb-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 ">
          © 2023 Sportshop.com Created by: Flashpoint
        </div>
      </div>
    </>
  );
};

export default Footer;
