import React, { useEffect, useRef, useState } from 'react';

const VideoBlock: React.FC = React.memo(() => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [videoStarted, setVideoStarted] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (isMobile) {
            if (!entry.isIntersecting) {
              videoRef.current.pause();
            }
          } else {
            if (entry.isIntersecting) {
              videoRef.current.play();
            } else {
              videoRef.current.pause();
            }
          }
        }
      },
      { threshold: 1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [isMobile]);


  const handlePlayClick = () => {
    setVideoStarted(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <section className="bg-dark-gray p-6" id="video">
      <h2 className="text-xl md:text-4xl font-bold m-10 text-center" style={{ wordSpacing: "3px", letterSpacing: "1px" }}>
        Видео: процесс изготовления детали
      </h2>
      <div className="flex justify-center relative">
        <div className="w-full max-w-screen-lg border-4 border-accent rounded-sm aspect-video overflow-hidden relative">
          <video
            ref={videoRef}
            controls
            muted
            loop
            className="w-full h-full rounded-lg"
          >
            <source src="/video/production.mp4" type="video/mp4" />
            Ваш браузер не поддерживает тег видео.
          </video>
          {isMobile && !videoStarted && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <button
                onClick={handlePlayClick}
                className="text-white text-3xl px-4 py-2 border border-white rounded"
              >
                ▶ Play
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
});

export default VideoBlock;
