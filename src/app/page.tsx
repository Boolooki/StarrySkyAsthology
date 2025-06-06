import ServicesBanner from "./components/ServicesBanner";
import StarryBanner from "./components/StarryBanner";
import WhyChooseUsBanner from "./components/WhyChooseUsBanner";


export default function Home() {
  return (
    <div>
      <StarryBanner />
      <ServicesBanner />
      <WhyChooseUsBanner />
    </div>
  );
}
