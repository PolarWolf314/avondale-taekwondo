"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/assets/blitz.jpg",
  "/assets/double_front_snap.jpg",
  "/assets/high_turning_kick.jpg",
  "/assets/self_defense.jpg",
  "/assets/side_kick.jpg",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className="relative w-full h-[700px]">
        <Image
          src={images[currentIndex]}
          alt=""
          fill
          className="object-cover transition ease-in-out duration-1000"
        />
      </div>
      <h1>This is the HERO section</h1>
    </section>
  );
};

export default Hero;
