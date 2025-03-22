import React from 'react';
import { FaDownload, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";

const ContactsSection: React.FC = React.memo(() => {
  return (
      <section className="bg-dark-gray p-6 pb-16" id="contacts">
        <h2 className="text-xl md:text-4xl m-10 font-bold mb-6 text-center" style={{ letterSpacing: "1px" }}>
          Контакты
        </h2>

        <div className="relative">
          <div className="section-icon absolute top-[-30px] left-1/2 transform -translate-x-1/2 opacity-0">
            <FontAwesomeIcon icon={faArrowDown} size="2x"/>
          </div>
        </div>
        <div className="max-w-6xl mx-auto m-10 grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-16">
          <div className="space-y-6">
            <p className="flex items-center text-lg md:text-2xl font-semibold gap-4">
              <FaMapMarkerAlt className="text-3xl" style={{color: "var(--accent-color)"}}/>
              [Ваша компания]
            </p>
            <p className="flex items-center text-lg md:text-2xl gap-4">
              <FaPhoneAlt className="text-3xl" style={{color: "var(--accent-color)"}}/>
              +7 123 456 78 90
            </p>
            <p className="flex items-center text-lg md:text-2xl gap-4">
              <FaEnvelope className="text-3xl" style={{color: "var(--accent-color)"}}/>
              address@example.com
            </p>
            <p className="flex items-center text-lg md:text-2xl gap-4">
              <FaMapMarkerAlt className="text-3xl" style={{color: "var(--accent-color)"}}/>
              Адрес: [адрес вашей компании]
            </p>
            {/* Скачать реквизиты в пдф */}
            <a
                href="/company_details.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-accent text-white hover:text-white font-semibold text-lg md:text-2xl px-6 py-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-hover-color w-max"
            >
              <FaDownload className="text-3xl" style={{color: "var(--text-color)"}}/>
              Скачать реквизиты
            </a>
          </div>

          <div className="w-full border-4 border-accent rounded-sm overflow-hidden aspect-[16/9]">
            <iframe
                title="[Ваша компания] - карта проезда"
                src="https://yandex.ru/map-widget/v1/[Координаты],pm2rdm"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
            />
          </div>
        </div>
      </section>
  );
});

export default ContactsSection;
