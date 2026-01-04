import HeroSection from '../components/HeroSection';
import Section1Page from './Section1Page';
import ServicesSection from './ServicesSection';
import ClientsSection from './ClientsSection';
import WorkTogetherSection from './WorkTogetherSection';
import EnquiryFormSection from './EnquiryFormSection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Section1Page />
      <ServicesSection />
      <ClientsSection />
      <WorkTogetherSection />
      <EnquiryFormSection />
    </div>
  );
};

export default Home;

