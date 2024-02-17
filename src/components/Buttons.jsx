// import { LuBarChartHorizontalBig } from "react-icons/lu";
// import React, { useState } from "react";

// const Buttons = ({
//   selectedCategory,
//   onCategoryChange,
//   selectedBrand,
//   onBrandChange,
// }) => {
//   const categories = ["All", "Shose", "Shirt", "shorts", "jacket"];
//   const brands = ["All", "Nike", "Adidas","Puma","Umbro"];
//   const [showFilter, setShowFilter] = useState(false);

//   return (
//     <div>
//       <button
//         onClick={() => setShowFilter(!showFilter)}
//         className="border border-gray-400 text-black px-2 py-1 rounded-md mb-4 md:hidden shadow-md"
//       >
//         {showFilter ? (
//           <span className="flex items-center gap-2">
//             <LuBarChartHorizontalBig className="text-gray-600" />
//             Hide
//           </span>
//         ) : (
//           <span className="flex items-center gap-2">
//             <LuBarChartHorizontalBig className="text-gray-600" />
//             Filter
//           </span>
//         )}
//       </button>

//       <div className="pb-1 border-b-2">
//         <div className={showFilter ? "md:grid" : "hidden  md:grid"}>
//           <div className="md:pr-32">
//             <div>
//               <h1 className="font-bold text-lg mb-1">Category</h1>
//             </div>
//             <div className="mb-4 space-x-2  md:grid md:space-x-0">
//               {categories.map((category) => (
//                 <button
//                   key={category}
//                   className={`${
//                     (category.toLowerCase() === "all" &&
//                       selectedCategory === null) ||
//                     selectedCategory === category.toLowerCase()
//                       ? "text-black md:font-bold   md:border-l-2 md:border-black text-start bg-white"
//                       : "text-black shadow-md rounded-md md:rounded-none md:shadow-none md:border-l-2 border-gray-300 text-start bg-gray-200 md:bg-white"
//                   } px-3  `}
//                   onClick={() =>
//                     onCategoryChange(
//                       category.toLowerCase() === "all"
//                         ? null
//                         : category.toLowerCase()
//                     )
//                   }
//                 >
//                   {category}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div>
//             <h1 className="font-bold text-lg mb-1">Our Brand</h1>
//           </div>
//           <div className="mb-4 space-x-2  md:grid md:space-x-0">
//             {brands.map((brand) => (
//               <button
//                 key={brand}
//                 className={`${
//                   (brand.toLowerCase() === "all" && selectedBrand === null) ||
//                   selectedBrand === brand.toLowerCase()
//                     ? "text-black md:font-bold   md:border-l-2 md:border-black text-start bg-white"
//                     : "text-black shadow-md rounded-md md:rounded-none md:shadow-none md:border-l-2 border-gray-300 text-start bg-gray-200 md:bg-white"
//                 } px-3  `}
//                 onClick={() =>
//                   onBrandChange(
//                     brand.toLowerCase() === "all" ? null : brand.toLowerCase()
//                   )
//                 }
//               >
//                 {brand}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Buttons;
import { LuBarChartHorizontalBig } from "react-icons/lu";
import React, { useState } from "react";

const Buttons = ({
  selectedCategory,
  onCategoryChange,
  selectedBrand,
  onBrandChange,
}) => {
  const categories = ["All", "Shose", "Shirt", "shorts", "jacket"];
  const brands = ["All", "Nike", "Adidas", "Puma", "Umbro"];
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="whitespace-nowrap ">
      <button
        onClick={() => setShowFilter(!showFilter)}
        className="border border-gray-400 text-black px-2 py-1 rounded-md mb-4 md:hidden shadow-md"
      >
        {showFilter ? (
          <span className="flex items-center gap-2">
            <LuBarChartHorizontalBig className="text-gray-600" />
            Hide
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <LuBarChartHorizontalBig className="text-gray-600" />
            Filter
          </span>
        )}
      </button>

      <div className="pb-1 border-b-2">
        <div className={showFilter ? "md:grid" : "hidden  md:grid"}>
          <div className="md:pr-32 ">
            <div>
              <h1 className="font-bold text-lg mb-1">Category</h1>
            </div>
            <div className="overflow-x-scroll overflow-x-scroll-hide-scroll">
              <div className="mb-4 space-x-2 md:grid md:space-x-0">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`${
                      (category.toLowerCase() === "all" &&
                        selectedCategory === null) ||
                      selectedCategory === category.toLowerCase()
                        ? "text-black md:font-bold md:border-l-2 md:border-black text-start bg-white"
                        : "text-black shadow-md rounded-md md:rounded-none md:shadow-none md:border-l-2 border-gray-300 text-start bg-gray-200 md:bg-white"
                    } px-3  `}
                    onClick={() =>
                      onCategoryChange(
                        category.toLowerCase() === "all"
                          ? null
                          : category.toLowerCase()
                      )
                    }
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h1 className="font-bold text-lg mb-1">Our Brand</h1>
            <div className="overflow-x-scroll overflow-x-scroll-hide-scroll">
              <div className="mb-4 space-x-2 md:grid md:space-x-0">
                {brands.map((brand) => (
                  <button
                    key={brand}
                    className={`${
                      (brand.toLowerCase() === "all" &&
                        selectedBrand === null) ||
                      selectedBrand === brand.toLowerCase()
                        ? "text-black md:font-bold md:border-l-2 md:border-black text-start bg-white"
                        : "text-black shadow-md rounded-md md:rounded-none md:shadow-none md:border-l-2 border-gray-300 text-start bg-gray-200 md:bg-white"
                    } px-3  `}
                    onClick={() =>
                      onBrandChange(
                        brand.toLowerCase() === "all"
                          ? null
                          : brand.toLowerCase()
                      )
                    }
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
