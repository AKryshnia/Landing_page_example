import React from 'react';
import ContactButton from "./ContactsButton.tsx";

const HeroSection: React.FC = React.memo(() => {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-[60vh] text-center text-white p-4 md:p-6"
    >
      {/* Затемняющий оверлей */}
      <div
        className="absolute inset-0 bg-secondary bg-opacity-20"
        style={{
          backgroundImage: "url('/assets/hero-image.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(2px) brightness(0.4)',
          transition: 'filter 0.5s ease-in-out',
        }}
      ></div>

      {/* Контент */}
      <div className="relative z-10 w-full max-w-4xl px-4 md:px-10">
        <h1 className="text-3xl md:text-6xl font-extrabold text-gray-50 shadow-text animate-fadeIn" style={{ wordSpacing: "3px", letterSpacing: "1px" }}>
          Основной заголовок сайта, <br />
          отражающий цели деятельности компании
        </h1>
        <p className="text-base md:text-2xl mt-10 mb-10 font-bold text-gray-100 animate-fadeIn delay-200" style={{ wordSpacing: "3px", letterSpacing: "1px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris,
          duis aute irure dolor in reprehenderit in voluptate velit esse.
        </p>

        <div className="flex justify-center">
          <ContactButton />
        </div>
      </div>
    </section>
  );
});

export default HeroSection;
