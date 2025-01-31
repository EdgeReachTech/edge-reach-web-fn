import React, { useEffect, useRef, useState } from "react";
import IMG77 from "../assets/serviceimage/IMG-77.webp";
import IMG24 from "../assets/serviceimage/IMG-24.webp";
import IMG72 from "../assets/serviceimage/IMG-72.webp";
import IMG86 from "../assets/serviceimage/IMG-86.webp";
import IMG129 from "../assets/serviceimage/IMG-129.webp";

const images = [IMG77, IMG24, IMG72, IMG86, IMG129];

const Homebg: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalId = useRef<number | undefined>(undefined);

  useEffect(() => {
    const totalImages = images.length;

    const slide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    };

    intervalId.current = window.setInterval(slide, 8000);

    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, []);

  return (
    <div className="absolute h-screen overflow-hidden bg-gray-300">
      <div
        className=" flex transition-transform duration-1000 ease-in-out "
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-full h-full">
            <img
              className="w-full h-full brightness-50 object-cover "
              src={image}
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homebg;
