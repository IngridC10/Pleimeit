"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
const images = ["/images/home/Sports.png", "/images/home/Sports1.jpg"];

const BannerComponent = () => {
  const [currentImageState, setCurrentImageState] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageState((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section relative bg-purpleBackground text-white pt-24">
      <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
        <div>
          <h1 className="font-bebas text-5xl lg:text-7xl mb-8">
            JUEGA, CONOCE Y FORMA <br />
            TU COMUNIDAD DEPORTIVA
          </h1>

          <p className="font-raleway text-md lg:text-lg text-white/90 max-w-xl mb-8">
            PLEIMEIT UNE A JUGADORES, EQUIPOS Y ORGANIZADORES PARA CREAR
            PARTIDAS REALES CERCA DE TI. ENCUENTRA TU DEPORTE, CONFIRMA TU CUPO
            Y COMPARTE LA EXPERIENCIA CON TU COMUNIDAD.
          </p>

          <div className="flex items-center gap-4 mb-6">
            <Image
              src="/images/home/AppStore.png"
              alt="App Store"
              width={165}
              height={45}
            />
            <Image
              src="/images/home/GooglePlay.png"
              alt="Google Play"
              width={165}
              height={45}
            />
          </div>

          <p className="font-raleway font-bold text-sm">
            PRIVADA Y SEGURA · GRATIS PARA EMPEZAR
          </p>
        </div>

        <div className="relative w-full h-105 lg:h-130">
          <Image
            key={currentImageState}
            src={images[currentImageState]}
            alt="Deportistas"
            fill
            className="object-contain transition-opacity duration-700"
            priority
          />
        </div>
      </div>

      <div className="absolute mt-16 w-full">
        <div className="font-bebas max-w-4xl text-xl flex justify-center items-center mx-auto h-17.5 bg-[#1F2399] text-white rounded-xl py-4 px-6 text-center font-semibold shadow-lg">
          CONFIADO POR MILES DE JUGADORES Y COMUNIDADES DEPORTIVAS ⭐ 4.8/5 EN
          RESEÑAS REALES
        </div>
      </div>
    </section>
  );
};
export default BannerComponent;
