"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = ["/images/home/sports.png", "/images/home/sports1.jpg"];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-purpleBackground text-white overflow-hidden pt-20">
      {/* CONTAINER */}
      <div
        className="
      container mx-auto 
      px-6 xl:px-16
      py-20
      grid grid-cols-1 lg:grid-cols-2
      gap-10
      items-center
    "
      >
        {/* TEXT */}
        <div>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
            JUEGA, CONOCE Y FORMA <br />
            TU COMUNIDAD DEPORTIVA
          </h1>

          <p className="text-sm lg:text-base text-white/90 max-w-xl mb-8">
            Pleimeit une a jugadores, equipos y organizadores para crear
            partidas reales cerca de ti. Encuentra tu deporte, confirma tu cupo
            y comparte la experiencia con tu comunidad.
          </p>

          <div className="flex items-center gap-4 mb-6">
            <Image
              src="/images/home/AppStore.png"
              alt="App-Store"
              width={140}
              height={45}
            />
            <Image
              src="/images/home/GooglePlay.png"
              alt="Google Play"
              width={140}
              height={45}
            />
          </div>

          <p className="text-xs tracking-wide">
            PRIVADA Y SEGURA · GRATIS PARA EMPEZAR
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative w-full h-95 lg:h-112.5">
          <Image
            key={currentImage}
            src={images[currentImage]}
            alt="Deportistas"
            fill
            className="object-contain transition-opacity duration-700"
            priority
          />
        </div>
      </div>

      {/* BOTTOM BAR (FULL WIDTH) */}
      <div className="bg-[#1F2399] text-center py-4 text-sm font-semibold">
        CONFIADO POR MILES DE JUGADORES Y COMUNIDADES DEPORTIVAS ⭐ 4.8/5 EN
        RESEÑAS REALES
      </div>
    </section>
  );
}
