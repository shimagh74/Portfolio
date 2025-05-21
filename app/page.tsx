'use client'

import Hero from "./components/Hero";
import Services from "./components/services";
import Work from "./components/work";
import FAQ from "./components/FAQ";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <Work />
      <FAQ />
      <Contact /> 
      <Footer />
    </div>
  );
}