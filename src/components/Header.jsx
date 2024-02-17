import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { MdPhoneInTalk } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";

const Header = () => {
  return (
    <>
      <div className="bg-gray-200 px-2 whitespace-nowrap md:px-5 lg:px-24   text-gray-600">
        <div className="flex flex-row justify-between  items-center py-[0.4rem] lg:py-1">
          <div className="flex ">
            <div className="flex items-center  space-x-2">
              <TbTruckDelivery className="text-xs lg:text-lg" />
              <span className="font-semibold tracking-wide text-xs">
                Worldwide delivery
              </span>
            </div>
          </div>
          <div className=" hidden md:flex ">
            <div className="flex items-cent er space-x-2">
              <MdPhoneInTalk className="text-xs lg:text-lg" />

              <span className="font-semibold tracking-wide text-xs">
                Call Us: +855 123123123
              </span>
            </div>
          </div>
          <div className="md:flex ">
            <div className="flex items-center spac e-x-2">
              <MdOutlineShoppingBag className="text-xs lg:text-lg" />
              <span className="font-semibold tracking-wide text-xs">
                Passion for Shopping
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header