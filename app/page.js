import Topbar from "@/components/ui/Topbar";
import Header from "@/components/ui/Header";
import Hero from "@/components/ui/Hero";
import About from "@/components/ui/About";
import Stats from "@/components/ui/Stats";
import Services from "@/components/ui/Services";
import Work from "@/components/ui/Work";
import Testimonials from "@/components/ui/Testimonials";
import Faq from "@/components/ui/Faq";
import Contact from "@/components/ui/Contact";
import Footer from "@/components/ui/Footer";
import React from "react";

const Home = () => {
  return (
  <div>
    <Topbar />
    <Header />
    <Hero />
    <About />
    <Stats />
    <Services />
    <Work />
    <Testimonials />
    <Faq />
    <Contact />
    <Footer /> 
  </div>
  );
};

export default Home;
