import React, { useState } from "react";
import ImageOne from "../assets/wrench.jpg";
import ImageTwo from "../assets/wrench.jpg";

const workStages = [
  {
    title: "1 этап работ",
    price: "Цена в зависимости от услуги",
    img: ImageOne,
  },
  {
    title: "2 этап работ",
    price: "Цена в зависимости от услуги",
    img: ImageTwo,
  },
  {
    id: "nav_section1",
    title: "3 этап работ",
    price: "Цена в зависимости от услуги",
    img: "/assets/gif1.GIF",
  },
  {
    id: "nav_section3",
    title: "4 этап работ",
    price: "Цена в зависимости от услуги",
    img: "/assets/gif2.GIF",
  },
];

const WorkStages: React.FC = React.memo(() => {
  const [selectedStage, setSelectedStage] = useState<null | typeof workStages[0]>(null);

  return (
    <div className="bg-dark-gray py-10">
      <h2 className="text-xl md:text-4xl font-bold my-10 text-center" style={{ letterSpacing: "2px" }}>Этапы работ</h2>

      {/* Сетка с блоками этапов */}
      <div className="max-w-screen-lg mx-auto grid gap-8 grid-cols-1 md:grid-cols-2">
        {workStages.map((stage, index) => (
          <section
            key={index}
            id={stage.id ? stage.id : undefined}
            className="stage-block cursor-pointer shadow-lg flex flex-col transition-transform duration-300 hover:scale-105 scroll-mt-24"
            onClick={() => setSelectedStage(stage)}
          >
            {/* Заголовок */}
            <div className="p-4 text-center bg-white text-black font-bold text-xl md:text-2xl min-h-[60px] md:min-h-[90px] flex items-center justify-center" style={{ wordSpacing: "6px" }}>
              {stage.title}
            </div>

            {/* Изображение */}
            <div className="relative w-full h-[250px] md:h-[300px] overflow-hidden">
              <img
                src={stage.img}
                alt={stage.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Цена */}
            <div className="bg-accent text-white font-bold py-4 h-[60px] md:h-[90px] flex justify-center items-center text-lg">
              {stage.price}
            </div>
          </section>
        ))}
      </div>

      {/* Модальное окно */}
      {selectedStage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setSelectedStage(null)}
        >
          <div className="relative max-w-5xl bg-white rounded-lg shadow-lg flex flex-col overflow-hidden">
            <div className="font-bold text-2xl p-6 bg-white text-black text-center">
              {selectedStage.title}
            </div>
            <div className="flex-grow flex justify-center items-center overflow-hidden">
              <img
                src={selectedStage.img}
                alt={selectedStage.title}
                className="w-auto h-auto max-w-full max-h-[70vh] object-contain"
              />
            </div>
            <div className="bg-accent text-white font-bold text-lg p-4 text-center">
              {selectedStage.price}
            </div>
          </div>
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={() => setSelectedStage(null)}
          >
            ✖
          </button>
        </div>
      )}
    </div>
  );
});

export default WorkStages;
