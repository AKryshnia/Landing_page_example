import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    setIsClicked(true);

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => setIsClicked(false), 500);
    }, 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 sm:bottom-12 sm:right-12 p-4 sm:p-6 rounded-full shadow-lg 
        bg-accent text-white hover:bg-hover-color transition-all duration-300 transform 
        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-75"} 
        ${isClicked ? "opacity-0 scale-50" : ""}`}
      aria-label="Вернуться наверх"
      tabIndex={-1}
      style={{ outline: "none", boxShadow: "0px 6px 14px rgba(250, 109, 43, 0.5)" }}
    >
      <FaArrowUp size={24} className="focus:outline-none focus:ring-0 sm:text-3xl" />
    </button>
  );
};

export default BackToTopButton;
