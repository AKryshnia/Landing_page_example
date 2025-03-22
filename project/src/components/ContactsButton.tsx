import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretRight} from "@fortawesome/free-solid-svg-icons";

const ContactButton: React.FC = () => {
  const [leftHovered, setLeftHovered] = useState(false);
  return (
      <a
          href="#contacts"
          className="max-w-lg flex rounded-full overflow-hidden shadow-lg text-white text-3xl md:text-4xl font-semibold transition-all duration-300 hover:scale-105 relative"
      >
        <div
            onMouseEnter={() => setLeftHovered(true)}
            onMouseLeave={() => setLeftHovered(false)}
            className={`w-1/2 flex items-center justify-center py-6 md:py-8 px-6 md:px-10 text-center transition-colors duration-300 ${
                leftHovered ? "bg-hover-color" : "bg-accent"
            }`}
        >
          <span className="text-white text-xl md:text-3xl" style={{ letterSpacing: "0.5px" }}>Есть вопросы?</span>

        <div className="absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2">
          <FontAwesomeIcon icon={faCaretRight} className="text-gray-50 text-8xl" />
        </div>
      </div>

        <div
            className="w-1/2 flex items-center justify-center bg-dark py-6 md:py-8 px-6 md:px-10 text-center transition-colors duration-300 hover:bg-accent border-t-2 border-r-2 border-b-2 border-accent hover:border-accent rounded-tr-full rounded-br-full box-border">
          <span className="text-white text-xl md:text-3xl" style={{ letterSpacing: "0.5px" }}>Будем рады звонку!</span>
        </div>
      </a>
  );
};

export default ContactButton;
