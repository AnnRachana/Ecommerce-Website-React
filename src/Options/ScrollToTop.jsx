import React, { useState, useEffect } from "react";
import { BiChevronUp } from "react-icons/bi";

import "./ScrollToTop.css";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="top-to-btm">
      {" "}
      {showTopBtn && (
        <BiChevronUp className="icon-position icon-style" onClick={goToTop}  />
      )}{" "}
    </div>
  );
};
export default ScrollToTop;
