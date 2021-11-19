import FeaturesList from "../FeaturesList/FeaturesList";
import Hero from "../Hero/Hero";
import StayProductiveSection from "../StayProductiveSection/StayProductiveSection";
import TestimonialsList from "../TestimonialsList/TestimonialsList";

const MainContent = () => {
  return (
    <main>
      <Hero />
      <FeaturesList />
      <StayProductiveSection />
      <TestimonialsList />
    </main>
  );
};

export default MainContent;
