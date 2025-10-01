"use client";

import Hero from "./components/Hero";
import Services from "./components/services";
import Certificates from "./components/Certificates";
import FAQ from "./components/FAQ";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <Certificates />
      <Projects />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
