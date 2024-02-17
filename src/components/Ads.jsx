
// import React, { useState, useEffect } from "react";

// const Slide1 = () => {
//   return (
//     <div className="slide slide1  py-1 border-b-2">
//       <div className="content">
//         <div className=" px-2 whitespace-nowrap md:px-5 lg:px-24 text-gray-600">
//           <div className="flex place-items-center justify-center space-x-3">
//             <div className="opacity-[0.5]">
//               <img
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJVRib8BpkMk83D9wZWoMCTUUaaMgUSijKQA&usqp=CAU"
//                 alt=""
//                 className="h-4 w-6"
//               />
//             </div>

//             <h1 className="text-black text-xs tracking-wide lg:text-[0.9rem]">
//               Join Our Adiclub & Get 15% OFF
//             </h1>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Slide2 = () => {
//   return (
//     <div className="slide slide2  py-1 border-b-2">
//       <div className="content">
//         <div className=" px-2 whitespace-nowrap md:px-5 lg:px-24">
//           <div className="flex place-items-center space-x-3 justify-center">
//             <div className="opacity-[0.5]">
//               <img
//                 src="https://cdn.mos.cms.futurecdn.net/786NzPhpXo6G8hkutJkHTM-1200-80.jpg"
//                 alt=""
//                 className="h-4 w-6"
//               />
//             </div>

//             <h1 className="text-black text-xs tracking-wide lg:text-[0.9rem]">
//               Love Sport Sale Extended: Extra 20% Off
//             </h1>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Slide3 = () => {
//   return (
//     <div className="slide slide3  py-1 border-b-2">
//       <div className="content">
//         <div className=" px-2 whitespace-nowrap md:px-5 lg:px-24">
//           <div className="flex place-items-center space-x-3 justify-center">
//             <div className="opacity-[0.5]">
//               <img
//                 src="https://i.pinimg.com/736x/cb/a4/5c/cba45c297d76265b0f0b60ebd5d967bd.jpg"
//                 alt=""
//                 className="h-4 w-6"
//               />
//             </div>

//             <h1 className="text-black text-xs tracking-wide lg:text-[0.9rem]">
//               30% OFF Orders $125+ Treat Yourself To Something Sweet With Code
//               Love30
//             </h1>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Ads = () => {
//   const [currentSlide, setCurrentSlide] = useState(1);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide === 3 ? 1 : prevSlide + 1));
//     }, 2000);

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div className="slides-container bg-gray-50">
//       <div
//         className="slide-wrapper"
//         style={{ transform: `translateX(calc(${currentSlide - 1} * -100%))` }}
//       >
//         <Slide1 key={1} />
//         <Slide2 key={2} />
//         <Slide3 key={3} />
//       </div>
//       <style>
//         {`
//           .slides-container {
//             overflow: hidden;
//             width: 100%;
//           }

//           .slide-wrapper {
//             display: flex;
//             transition: transform 0.5s ease-out;
//           }

//           .slide {
//             flex-shrink: 0;
//             width: 100%;
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default Ads;
import React, { useState, useEffect } from "react";

const slidesData = [
  {
    id: 1,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJVRib8BpkMk83D9wZWoMCTUUaaMgUSijKQA&usqp=CAU",
    text: "Join Our Adiclub & Get 15% OFF",
  },
  {
    id: 2,
    imageUrl:
      "https://cdn.mos.cms.futurecdn.net/786NzPhpXo6G8hkutJkHTM-1200-80.jpg",
    text: "Love Sport Sale Extended: Extra 20% Off",
  },
  {
    id: 3,
    imageUrl:
      "https://i.pinimg.com/736x/cb/a4/5c/cba45c297d76265b0f0b60ebd5d967bd.jpg",
    text: "30% OFF Orders $125+ Treat Yourself  ",
  },
];

const Slide = ({ imageUrl, text }) => {
  return (
    <div className="slide py-1 border-b-2">
      <div className="content">
        <div className=" px-2 whitespace-nowrap md:px-5 lg:px-24 text-gray-600">
          <div className="flex place-items-center justify-center space-x-3">
            <div className="opacity-[0.5]">
              <img src={imageUrl} alt="" className="h-4 w-6" />
            </div>
            <h1 className="text-black text-xs tracking-wide lg:text-[0.9rem]">
              {text}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

const Ads = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slidesData.length - 1 ? 0 : prevSlide + 1
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="slides-container bg-gray-50">
      <div
        className="slide-wrapper"
        style={{ transform: `translateX(calc(${currentSlide} * -100%))` }}
      >
        {slidesData.map((slide, index) => (
          <Slide key={slide.id} imageUrl={slide.imageUrl} text={slide.text} />
        ))}
      </div>
      <style>
        {`
          .slides-container {
            overflow: hidden;
            width: 100%;
          }

          .slide-wrapper {
            display: flex;
            transition: transform 0.5s ease-out;
          }

          .slide {
            flex-shrink: 0;
            width: 100%;
          }
        `}
      </style>
    </div>
  );
};

export default Ads;
