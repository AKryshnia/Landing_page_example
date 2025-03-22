import React, { useState } from 'react';
import Image from '../assets/wrench.jpg';

const CNCSection: React.FC = React.memo(() => {
  const [selectedService, setSelectedService] = useState<null | { title: string, img: string, price: string }>(null);

  const services = [
    {
      title: "Section One",
      price: "Цена за услугу",
      img: "/assets/gif1.GIF",
    },
    {
      title: "Section Two",
      price: "Цена за услугу",
      img: Image,
    },
  ];

  return (
    <section className="bg-dark-gray p-6" id="nav_section2">
      <div className="container mx-auto">

        <div className="flex justify-center items-center text-center px-6 py-10 m-10">
          <p className="text-xl md:text-3xl font-bold max-w-3xl animate-fadeIn delay-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Контейнер для двух блоков */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {services.map((service, index) => (
              <div key={index}
                   className="w-full md:w-1/2 flex flex-col items-center bg-secondary p-4 rounded-sm shadow-lg transition transform hover:scale-105 cursor-pointer overflow-hidden"
                   onClick={() => setSelectedService(service)}>
                <h3 className="text-xl md:text-4xl font-bold flex items-center justify-center min-h-[90px] md:min-h-[120px] text-center px-4">
                  {service.title}
                </h3>

                {/* Контейнер с изображением */}
                <div
                    className="relative w-full flex-grow min-h-[250px] aspect-[4/3] overflow-hidden border-4 border-accent rounded-sm">
                  <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover"
                  />
                </div>

                {/* Сплошное оранжевое поле с ценой */}
                <div
                    className="bg-accent text-white text-lg md:text-2xl font-bold flex items-center justify-center py-4 min-h-[60px] md:min-h-[90px] w-full">
                  {service.price}
                </div>
              </div>
          ))}
        </div>

      </div>

      {/* Модальное окно с большим изображением */}
      {selectedService && (
          <div
              className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
              onClick={() => setSelectedService(null)}
          >
            <div className="relative w-full max-w-5xl bg-white rounded-lg shadow-lg text-center flex flex-col">
              {/* Заголовок (фиксированная высота) */}
            <div className="text-lg md:text-2xl font-bold flex items-center justify-center bg-white text-black py-4 min-h-[60px] md:min-h-[90px]">
              {selectedService.title}
            </div>

            {/* Контейнер с изображением */}
            <div className="relative w-full flex-grow">
              <img
                src={selectedService.img}
                alt={selectedService.title}
                className="w-full max-h-[80vh] object-contain rounded-sm"
              />
            </div>

            {/* Сплошное оранжевое поле с ценой */}
            <div className="bg-accent text-white text-lg md:text-2xl font-bold flex items-center justify-center py-4 min-h-[60px] md:min-h-[90px]">
              {selectedService.price}
            </div>
          </div>
        </div>
      )}
    </section>
  );
});

export default CNCSection;
