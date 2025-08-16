import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Features from "@/components/Features";
import Steps from "@/components/Steps";
import UseCases from "@/components/UseCases";
import Pricing from "@/components/Pricing";
import Company from "@/components/Company";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      <Features />
      <Steps />
      <UseCases />
      <Pricing />
      <Company />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
