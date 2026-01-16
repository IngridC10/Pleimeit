"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
const RateEventComponent = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="   lg:min-h-screen  w-full bg-white flex justify-center items-center     lg:snap-center
   py-12 md:py-20 lg:py-24 "
    >
      <div
        className={`
          section-container flex flex-col lg:flex-row
          items-center lg:justify-center gap-8 lg:gap-20
          transition-all duration-700 ease-out  max-w-7xl mx-auto px-6 md:px-12 lg:px-20
          ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }
        `}
      >
        <div className="order-1 lg:order-2 w-full lg:flex-1 flex flex-col gap-4 text-center lg:text-left">
          <h1 className="font-inter text-2xl xs:text-3xl lg:text-4xl xl:text-5xl text-textBlack font-bold">
            Califica tu último evento
          </h1>

          <p className="text-textBlack font-inter text-base lg:text-lg xl:text-xl max-w-xl mx-auto lg:mx-0">
            Evalúa la experiencia del juego y ayuda a que la comunidad crezca
            con jugadores comprometidos. Tus opiniones son anónimas y mejoran
            los futuros encuentros.
          </p>
        </div>

        <div className="order-2 lg:order-1 w-full lg:flex-1 flex gap-3 lg:gap-4 justify-center">
          <div className="flex-1 max-w-[200px] sm:max-w-[280px] lg:max-w-[340px] shadow-[0_8px_20px_rgba(0,0,0,0.15)] rounded-2xl overflow-hidden">
            <div className="relative w-full aspect-[9/19.5]">
              <Image
                src="/images/home/RateEvent1.png"
                fill
                quality={90}
                alt="rate-event-1"
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex-1 max-w-[200px] sm:max-w-[280px] lg:max-w-[340px] shadow-[0_8px_20px_rgba(0,0,0,0.15)] rounded-2xl overflow-hidden">
            <div className="relative w-full aspect-[9/19.5]">
              <Image
                src="/images/home/RateEvent2.png"
                fill
                quality={90}
                alt="rate-event-2"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RateEventComponent;
