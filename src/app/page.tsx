import React from "react";
import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";
import Features from "@/components/sections/Features";
import Expertise from "@/components/sections/Expertise";
import SocialProof from "@/components/sections/SocialProof";
import Contact from "@/components/sections/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <Hero />
        <Partners />
        <Features />
        <Expertise />
        <SocialProof />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
