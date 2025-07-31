"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const images = [
  "/assets/blitz.jpg",
  "/assets/double_front_snap.jpg",
  "/assets/high_turning_kick.jpg",
  "/assets/self_defense.jpg",
  "/assets/side_kick.jpg",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(new Array(images.length).fill(false));

  // Preload all images
  useEffect(() => {
    images.forEach((src, index) => {
      const img = new window.Image();
      img.onload = () => {
        setImagesLoaded(prev => {
          const newLoaded = [...prev];
          newLoaded[index] = true;
          return newLoaded;
        });
      };
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-screen h-[calc(100vh-4rem)]">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt="Images of Avondale Taekwon-Do in action"
          fill
          unoptimized
          className={`object-cover transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ zIndex: 1 }}
          priority={index === 0}
        />
      ))}
      <h1 className="absolute top-1/2 left-1/2 min-w-72 max-w-2xl transform -translate-x-1/2 -translate-y-36 bg-gray-200 text-center font-display font-thin text-4xl md:text-5xl p-4 md:py-4 md:px-10 lg:px-16 leading-relaxed md:leading-[72px] z-10">
        Taekwon-Do is <br /> an{" "}
        <span className="before:block before:absolute before:-inset-0.5 before:-inset-x-2 before:-skew-y-3 before:bg-purple-500 relative inline-block">
          <span className="relative text-white font-bold italic">ART</span>
        </span>
      </h1>
      <div className="absolute bottom-0 w-96 md:w-full md:max-w-xl lg:max-w-2xl left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10">
        <Card className="rounded-none mx-3 py-3">
          <CardContent className="pt-4 pb-3">
            <p className="font-header text-center tracking-tighter text-gray-600 md:text-xl lg:2xl">
              Do you want to train your body and mind?
            </p>
          </CardContent>
          <CardFooter className="flex flex-col content-center">
            <Button className="px-6 text-xs md:text-sm" asChild>
              <Link href="/join" prefetch={true}>Enquire Now</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default Hero;
