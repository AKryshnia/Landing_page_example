import React, { useRef, useState, useEffect } from 'react';
import ImageOne from '../assets/wrench.jpg';
import ImageTwo from '../assets/wrench.jpg';
import ImageThree from '../assets/wrench.jpg';
import ImageFour from '../assets/wrench.jpg';
import ImageFive from '../assets/wrench.jpg';
import ImageSix from '../assets/wrench.jpg';


const images = [
  { src: ImageOne, alt: "Изображение 1", caption: "Описание изображения" },
  { src: ImageTwo, alt: "Изображение 2", caption: "Очень длинное описание изображения, в несколько строк на небольших экранах" },
  { src: ImageThree, alt: "Изображение 3", caption: "Описание изображения" },
  { src: ImageFour, alt: "Изображение 4", caption: "Очень длинное описание изображения, в несколько строк на небольших экранах" },
  { src: ImageFive, alt: "Изображение 5", caption: "Описание изображения" },
  { src: ImageSix, alt: "Изображение 6", caption: "Очень длинное описание изображения, в несколько строк на небольших экранах" },
];

const GallerySection: React.FC = React.memo(() => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const [isHovered, setIsHovered] = useState(false);
  const doubledImages = [...images, ...images];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const container = scrollRef.current;
    if (!container) return;
    const handleScroll = () => {
      const half = container.scrollWidth / 2;
      if (container.scrollLeft >= half) {
        const oldBehavior = container.style.scrollBehavior;
        container.style.scrollBehavior = 'auto';
        container.scrollLeft -= half;
        container.style.scrollBehavior = oldBehavior;
      }
      else if (container.scrollLeft <= 0) {
        const oldBehavior = container.style.scrollBehavior;
        container.style.scrollBehavior = 'auto';
        container.scrollLeft += half;
        container.style.scrollBehavior = oldBehavior;
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile) return;
    const container = scrollRef.current;
    if (!container) return;
    let lastScrollTime = 0;
    const onWheel = (e: WheelEvent) => {
      if (isHovered) {
        e.preventDefault();
        const now = Date.now();
        if (now - lastScrollTime < 300) return;
        const imageWidth = container.children[0]?.clientWidth || 200;
        container.scrollBy({ left: e.deltaY > 0 ? imageWidth : -imageWidth, behavior: "smooth" });
        lastScrollTime = now;
      }
    };
    container.addEventListener("wheel", onWheel, { passive: false });
    return () => container.removeEventListener("wheel", onWheel);
  }, [isHovered, isMobile]);

  return (
    <section className="bg-dark-gray py-10" id="gallery">
      <h2 className="text-xl md:text-4xl font-bold m-10 text-center">Примеры работ</h2>

      {isMobile ? (
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto overflow-y-hidden p-4 scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              whiteSpace: "nowrap",
              scrollBehavior: "smooth",
            }}
          >
            {doubledImages.map((img, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[90vw] sm:w-[60vw] aspect-auto transition-transform duration-300 ease-in-out"
              >
                <div className="w-full border-4 border-accent rounded-sm overflow-hidden">
                  <img src={img.src} alt={img.alt} className="w-full h-auto object-contain" />
                </div>
                <p className="text-lg md:text-xl text-center text-gray-300 mt-2 w-full break-words px-2 whitespace-normal">
                  {img.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto px-4">
          {images.map((img, index) => (
            <div key={index} className="w-full">
              <div className="w-full border-4 border-accent rounded-sm overflow-hidden">
                <img src={img.src} alt={img.alt} className="w-full h-auto object-contain" />
              </div>
              <p className="text-lg md:text-xl w-full text-center text-gray-300 mt-4">
                {img.caption}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
});

export default GallerySection;
