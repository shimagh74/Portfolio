import MobileNav from "@/components/MobileNav";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import React, { useState } from "react";
import Services from "@/components/services";
import Work from "@/components/work";
import FAQ from "@/components/FAQ";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div className="overflow-x-hidden">
   
        <Header/>
        <Hero />
        <Services />
        <Work />
        <FAQ />
        <Contact /> 
        <Footer />

    </div>
  );
};

export default HomePage;
