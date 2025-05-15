
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Comparison from "@/components/Comparison";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import PricingPlans from "@/components/PricingPlans";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Advantages from "@/components/Advantages";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <Comparison />
      <Services />
      <HowItWorks />
      <Advantages />
      <PricingPlans />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
