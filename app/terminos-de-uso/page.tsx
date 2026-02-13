import PdfViewerPage from "../components/PdfViewerPage";

const PDF_URL =
  "https://firebasestorage.googleapis.com/v0/b/pleimeit.firebasestorage.app/o/legal%2Fterminos-de-uso.pdf?alt=media&token=457e60b7-901c-483d-835b-9ab431bc27b0";

export default function TerminosDeUsoPage() {
  return <PdfViewerPage title="Términos y condiciones" pdfUrl={PDF_URL} />;
}
