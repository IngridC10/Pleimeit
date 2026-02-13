import PdfViewerPage from "../components/PdfViewerPage";

const PDF_URL =
  "https://firebasestorage.googleapis.com/v0/b/pleimeit.firebasestorage.app/o/legal%2Fpolitica-de-privacidad.pdf?alt=media&token=b4066570-73d1-4d9d-bbdc-61b2da4ca584";

export default function PoliticaDePrivacidadPage() {
  return <PdfViewerPage title="Políticas de privacidad" pdfUrl={PDF_URL} />;
}
