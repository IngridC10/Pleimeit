import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";

interface PdfViewerPageProps {
  title: string;
  pdfUrl: string;
}

const PdfViewerPage = ({ title, pdfUrl }: PdfViewerPageProps) => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="bg-purpleBackground">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20 flex items-center justify-between h-18">
          <Link href="/">
            <Image
              src="/images/home/PleimitLogo.png"
              alt="logo"
              height={100}
              width={170}
              className="w-30 lg:w-45"
            />
          </Link>

          <Link
            href="/"
            className="flex items-center gap-2 text-white font-raleway text-sm tracking-[0.15em] uppercase font-extrabold hover:scale-105 transition-transform"
          >
            <FaArrowLeft size={14} />
            <span className="hidden sm:inline">Volver al inicio</span>
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20 py-6">
        <h1 className="font-raleway text-2xl lg:text-3xl font-semibold text-textBlack">
          {title}
        </h1>
      </div>

      <div className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-8">
        <iframe
          src={pdfUrl}
          className="w-full h-[calc(100vh-200px)] rounded-lg border border-gray-200"
          title={title}
        />
      </div>
    </div>
  );
};

export default PdfViewerPage;
