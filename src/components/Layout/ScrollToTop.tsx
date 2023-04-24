import Image from "next/image";
import React, { useEffect, useState } from "react";
import ScrollIcon from "../../assets/icons/scroll.svg";
import { isBrowser } from "../../utils/common";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-40 right-5">
      <Image
        src={ScrollIcon}
        alt="Scroll to top"
        onClick={scrollToTop}
        className={isVisible ? "opacity-100" : "opacity-0"}
      />
    </div>
  );
};

export default ScrollToTop;
