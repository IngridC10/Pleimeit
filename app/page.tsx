import HeaderComponent from "./home/components/HeaderComponent";
import BannerComponent from "./home/components/BannerComponent";
import FooterComponent from "./home/components/FooterComponent";
import ContactComponent from "./home/components/ContactComponent";

export default function Page() {
  return (
    <div>
      <HeaderComponent />
      <BannerComponent />
      <ContactComponent />
      <FooterComponent />
    </div>
  );
}
