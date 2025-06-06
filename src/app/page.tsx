import ServicesBanner from "./components/ServicesBanner";
import StarryBanner from "./components/StarryBanner";
import WhyChooseUsBanner from "./components/WhyChooseUsBanner";

export default function Home() {
  return (
    <div className="snap-y snap-proximity">
      <StarryBanner />
      <ServicesBanner />
      <WhyChooseUsBanner />
    </div>
  );
}
