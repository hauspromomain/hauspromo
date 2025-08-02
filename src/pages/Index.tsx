
import { Hero } from "@/components/Hero";
import { Industries } from "@/components/Industries";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { TechSupport } from "@/components/TechSupport";
import { Merchandise } from "@/components/Merchandise";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Industries />
      <Services />
      <About />
      <WhyChooseUs />
      <TechSupport />
      <Merchandise />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
