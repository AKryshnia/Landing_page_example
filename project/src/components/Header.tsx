import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = React.memo(() => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [useBurger, setUseBurger] = useState(false);
  const measurementRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    sectionId: string
  ) => {
    e.preventDefault();
    const target = document.getElementById(sectionId);
    if (target) {
      const headerHeight = document.querySelector("header")?.offsetHeight || 80;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: targetPosition - headerHeight - 10,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    function updateLayout() {
      if (measurementRef.current) {
        const navButtons = Array.from(
          measurementRef.current.querySelectorAll(".nav-button")
        ) as HTMLElement[];
        const totalWidth = navButtons.reduce((acc, btn) => acc + btn.offsetWidth, 0);
        const availableWidth = window.innerWidth - 48;
        setUseBurger(totalWidth > availableWidth);
      }
    }
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  return (
    <header className="bg-black sticky top-0 z-50 shadow-md w-full">
      {/* Мобильная шапка */}
      <div className="md:hidden flex items-center justify-between py-3 px-6 w-full">
        <div className="flex flex-col items-start">
          <div className="text-l font-bold text-white">
            [Ваша компания]
          </div>
          <div className="flex flex-col items-start text-sm text-white">
            <span className="text-lg font-semibold">+7 123 456 78 90</span>
            <span className="text-lg">address@example.com</span>
          </div>
        </div>
        <div>
          <button onClick={toggleMenu} className="focus:outline-none text-white text-2xl">
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </button>
        </div>
      </div>

      {/* Десктопная шапка */}
      <div className="hidden md:flex flex-col">
        <div className="flex items-center justify-between py-3 px-6 w-full">
          <div className="text-l md:text-2xl font-bold text-white">
            [Ваша компания]
          </div>
          <div className="flex items-center text-sm text-white gap-x-6">
            <span className="text-lg font-semibold">+7 123 456 78 90</span>
            <span className="text-lg">address@example.com</span>
          </div>
        </div>

        <div className="w-full px-6 py-2">
          {useBurger ? (
            <div className="flex justify-end">
              <button onClick={toggleMenu} className="focus:outline-none text-white text-2xl">
                <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
              </button>
            </div>
          ) : (
            <nav className="flex gap-x-4 md:gap-x-8 text-l md:text-2xl font-semibold justify-center">
              <a
                href="#nav_section1"
                onClick={(e) => handleNavClick(e, "nav_section1")}
                className="nav-button whitespace-nowrap min-w-max"
              >
                Ссылка 1
              </a>
              <a
                href="#nav_section2"
                onClick={(e) => handleNavClick(e, "nav_section2")}
                className="nav-button whitespace-nowrap min-w-max"
              >
                Ссылка 2
              </a>
              <a
                href="#nav_section3"
                onClick={(e) => handleNavClick(e, "nav_section3")}
                className="nav-button whitespace-nowrap min-w-max"
              >
                Ссылка 3
              </a>
              <a
                href="#contacts"
                onClick={(e) => handleNavClick(e, "contacts")}
                className="nav-button whitespace-nowrap min-w-max"
              >
                Контакты
              </a>
            </nav>
          )}
        </div>
      </div>

      {/* Мобильное выпадающее меню */}
      {menuOpen && (
        <nav className="md:hidden bg-secondary bg-opacity-100 py-4">
          <ul className="flex flex-col items-center gap-4 w-full px-4">
            <li>
              <a
                href="#nav_section1"
                onClick={(e) => handleNavClick(e, "nav_section1")}
                className="nav-button"
              >
                Ссылка 1
              </a>
            </li>
            <li>
              <a
                href="#nav_section2"
                onClick={(e) => handleNavClick(e, "nav_section2")}
                className="nav-button"
              >
                Ссылка 2
              </a>
            </li>
            <li>
              <a
                href="#nav_section3"
                onClick={(e) => handleNavClick(e, "nav_section3")}
                className="nav-button"
              >
                Ссылка 3
              </a>
            </li>
            <li>
              <a
                href="#contacts"
                onClick={(e) => handleNavClick(e, "contacts")}
                className="nav-button"
              >
                Контакты
              </a>
            </li>
          </ul>
        </nav>
      )}

      {/* Скрытый измерительный контейнер */}
      <div
        ref={measurementRef}
        style={{ position: "absolute", opacity: 0, pointerEvents: "none", whiteSpace: "nowrap" }}
      >
        <nav className="flex gap-x-4 md:gap-x-8 text-l md:text-2xl font-semibold">
          <a href="#nav_section1" className="nav-button whitespace-nowrap min-w-max">
            Ссылка 1
          </a>
          <a href="#nav_section2" className="nav-button whitespace-nowrap min-w-max">
            Ссылка 2
          </a>
          <a href="#nav_section3" className="nav-button whitespace-nowrap min-w-max">
            Ссылка 3
          </a>
          <a href="#contacts" className="nav-button whitespace-nowrap min-w-max">
            Контакты
          </a>
        </nav>
      </div>
    </header>
  );
});

export default Header;
