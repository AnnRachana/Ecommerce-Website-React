// import "../style/active.css";

// import React, { useState } from "react";
// import { FaBars } from "react-icons/fa";
// import { IoCloseSharp } from "react-icons/io5";
// import { NavLink, Routes, Route } from "react-router-dom";
// import { FiShoppingCart } from "react-icons/fi";
// import { FaRegHeart } from "react-icons/fa";
// import { FaRegUser } from "react-icons/fa";
// import { NAVBAR_ITEMS } from "../constants/NavbarData";
// import Navmenu from "./Navmenu";

// function Navbar({ setCartVisible, productsInCart }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const activeClassName = "nav-active";

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   const renderNavItems = () => {
//     return (
//       <div>
//         <nav className="space-x-4 font-bold text-lg tracking-wide text-black">
//           {NAVBAR_ITEMS.map((navItem) => (
//             <NavLink
//               key={navItem.nav_id}
//               to={navItem.link}
//               className={({ isActive }) =>
//                 isActive ? activeClassName : undefined
//               }
//               onClick={closeMenu}
//             >
//               {navItem.nav_name}
//             </NavLink>
//           ))}
//         </nav>
//       </div>
//     );
//   };

//   const renderNavItemsMobile = () => {
//      return (
//        <div>
//          <nav className="grid gap-2 mt-5 font-bold text-md tracking-wide text-black">
//            {NAVBAR_ITEMS.map((navItem) => (
//              <NavLink
//                key={navItem.nav_id}
//                to={navItem.link}
//                className={({ isActive }) =>
//                  isActive ? activeClassName : undefined
//                }
//                onClick={closeMenu}
//              >
//                {navItem.nav_name}
//              </NavLink>
//            ))}
//          </nav>
//        </div>
//      );
//   };

//   const btnShoppingNav = (
//     <button
//       className=" shopping-cart-btn "
//       onClick={() => setCartVisible(true)}
//     >
//       <FiShoppingCart size={24} />
//       {productsInCart.length > 0 && (
//         <span className="product-count ">{productsInCart.length}</span>
//       )}
//     </button>
//   );

//   return (
//     <>
//       <div className="px-2  md:px-5 lg:px-24 border-b-2 py-3 lg:py-4 bg-white z-50 sticky top-[-1px]">
//         <div className="items-center ">
//           <div className="flex justify-between ">
//             <div className="flex">
//               <div className="grid items-center md:hidden ">
//                 <button
//                   id="menu-toggle"
//                   className="text-black font-bold text-xl "
//                   onClick={toggleMenu}
//                 >
//                   {isMenuOpen ? (
//                     <IoCloseSharp className="text-red-600 " />
//                   ) : (
//                     <FaBars />
//                   )}
//                 </button>
//               </div>
//               <div>
//                 <h3 className="font-bold text-[1.4rem] text-gray-800 ml-2 md:ml-0">
//                   <span className="text-gray-500">.com</span>
//                 </h3>
//               </div>
//             </div>

//             <div className="flex gap-2 lg:gap-4 items-center  ">
//               <div>
//                 <div className="hidden md:flex  space-x-6">
//                   {renderNavItems()}
//                 </div>
//               </div>
//               <div className="font-bold text-[1.25rem]">
//                 <FaRegUser />
//               </div>
//               <div className="font-bold text-[1.25rem]">
//                 <FaRegHeart />
//               </div>
//               <div>{btnShoppingNav}</div>
//             </div>
//           </div>

//           {/* Mobile Navigation */}
//           <div>
//             <div
//               className={`grid md:hidden transition-all duration-300 ease-in-out ${
//                 isMenuOpen ? "opacity-100" : "opacity-0"
//               }`}
//             >
//               {isMenuOpen && renderNavItemsMobile()}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar;
import "../style/active.css";

import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { NavLink, Routes, Route, Link } from "react-router-dom";
import { IoBagOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { NAVBAR_ITEMS } from "../constants/NavbarData";
import Navmenu from "./Navmenu";

function Navbar({ setCartVisible, productsInCart }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeClassName = "nav-active";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const renderNavItems = () => {
    return (
      <div>
        <nav className="space-x-4 font-bold text-lg tracking-wide text-black">
          {NAVBAR_ITEMS.map((navItem) => (
            <NavLink
              key={navItem.nav_id}
              to={navItem.link}
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
              onClick={closeMenu}
            >
              {navItem.nav_name}
            </NavLink>
          ))}
        </nav>
      </div>
    );
  };

  const renderNavItemsMobile = () => {
    return (
      <div className="mt-5  mx-10 ">
        <nav className="grid gap-2 mb-8 font-bold text-lg tracking-wide text-black">
          {NAVBAR_ITEMS.map((navItem) => (
            <NavLink
              key={navItem.nav_id}
              to={navItem.link}
              className={({ isActive }) =>
                isActive ? activeClassName : undefined
              }
              onClick={closeMenu}
            >
              <div className="flex justify-between">
                <div>{navItem.nav_name}</div>
                <div>
                  <IoIosArrowForward />
                </div>
              </div>
            </NavLink>
          ))}
        </nav>
      </div>
    );
  };

  const btnShoppingNav = (
    <button className="shopping-cart-btn" onClick={() => setCartVisible(true)}>
      <IoBagOutline size={24} />
      {productsInCart.length > 0 && (
        <span className="product-count">{productsInCart.length}</span>
      )}
    </button>
  );

  return (
    <>
      <div className="px-2 md:px-5 lg:px-24 border-b-2 py-3 lg:py-4 bg-white z-50 sticky top-[-1px]">
        <div className="items-center ">
          <div className="flex justify-between ">
            <div className="flex">
              <div className="grid items-center md:hidden ">
                <button
                  id="menu-toggle"
                  className="text-black font-bold text-xl "
                  onClick={toggleMenu}
                >
                  {isMenuOpen ? <IoCloseSharp /> : <FaBars />}
                </button>
              </div>
              <div>
                <h3 className="font-bold text-[1.4rem] text-gray-800 ml-2 md:ml-0">
                  <span className="text-gray-500">.com</span>
                </h3>
              </div>
            </div>

            <div className="flex gap-2 lg:gap-4 items-center  ">
              <div>
                <div className="hidden md:flex  space-x-6">
                  {renderNavItems()}
                </div>
              </div>

              <div className="font-bold  text-[1.25rem]">
                <Link to="/products">
                  <FiSearch />
                </Link>
              </div>
              <div>{btnShoppingNav}</div>
              <div className="font-bold text-[1.25rem]">
                <FaRegUser />
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="mobile-navigation absolute top-full left-0 bg-white w-full border-t-2 shadow-lg">
            <div
              className={`grid md:hidden transition-all duration-500 ease-in-out ${
                isMenuOpen ? "opacity-200" : "opacity-0"
              }`}
            >
              {isMenuOpen && renderNavItemsMobile()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
