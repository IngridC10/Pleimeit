import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const FooterComponent = () => {
  return (
    <footer className="bg-white border-t border-gray-200 lg:snap-center lg:scroll-mt-4.5">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20 py-10 lg:py-16">
       
        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 lg:gap-8">
          <ul className="flex flex-col font-inter lg:flex-row gap-4 lg:gap-6 text-base lg:text-lg text-textBlack font-medium">
            <li>
              <Link href="#contact" className="hover:text-purpleBackground transition-colors">
                Contacto
              </Link>
            </li>
            <li>
              <Link href="/#" className="hover:text-purpleBackground transition-colors">
                Términos de uso
              </Link>
            </li>
            <li>
              <Link href="/#" className="hover:text-purpleBackground transition-colors">
                Política de privacidad
              </Link>
            </li>
            <li>
              <Link href="/#" className="hover:text-purpleBackground transition-colors">
                Preguntas frecuentes
              </Link>
            </li>
          </ul>

          <div className="hidden lg:block">
            <Image
              src="/images/home/PleimitLogoBurger.png"
              alt="Pleimeit"
              width={120}
              height={40}
            />
          </div>
        </div>


        <div className="mt-8 lg:mt-12 flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-8">
          
          <div className="flex lg:hidden items-center justify-between w-full">
            <Image
              src="/images/home/PleimitLogoBurger.png"
              alt="Pleimeit"
              width={120}
              height={40}
            />

            <div className="flex gap-5 text-gray-800">
              <Link
                href="https://www.instagram.com/pleimeit"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-purpleBackground transition-colors"
              >
                <FaInstagram size={22} />
              </Link>

              <Link
                href="https://www.youtube.com/@pleimeit"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:text-purpleBackground transition-colors"
              >
                <FaYoutube size={22} />
              </Link>

              <Link
                href="https://www.linkedin.com/company/pleimeit"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-purpleBackground transition-colors"
              >
                <FaLinkedin size={22} />
              </Link>
            </div>
          </div>


          <div className="flex flex-col lg:flex-row items-center text-center lg:text-left gap-2 lg:gap-3 font-inter text-xs lg:text-sm text-textGraySecundary">
            <p>© 2026 Pleimeit. Todos los derechos reservados.</p>
            <p className="hidden lg:block"></p>
            <p>Diseñado con 💜 para deportistas y comunidades activas.</p>
          </div>

         
          <div className="hidden lg:flex gap-5 text-gray-800">
            <Link
              href="https://www.instagram.com/pleimeit"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-purpleBackground transition-colors"
            >
              <FaInstagram size={22} />
            </Link>

            <Link
              href="https://www.youtube.com/@pleimeit"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-purpleBackground transition-colors"
            >
              <FaYoutube size={22} />
            </Link>

            <Link
              href="https://www.linkedin.com/company/pleimeit"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-purpleBackground transition-colors"
            >
              <FaLinkedin size={22} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
