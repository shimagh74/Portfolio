import MobileNav from "@/Components/MobileNav";
import Nav from "@/Components/Nav";
import Hero from "@/Components/Hero";
import React, { useState } from "react";
import Services from "@/Components/services";
import Work from "@/Components/work";
import FAQ from "@/Components/FAQ";
import Contact from "@/Components/contact";
import Footer from "@/Components/Footer";

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div className="overflow-x-hidden">
      <div>
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />
        <Hero />
        <Services />
        <Work />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
