"use client";

import React from "react";
import Image from "next/image";

const SocialProof = () => {
  return (
    <section className="pt-16 pb-16 overflow-hidden px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-950 to-purple-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left side - Quote */}
          <div className="md:w-3/5">
            <div className="text-yellow-300 text-5xl font-serif mb-6">"</div>
            <blockquote className="text-white">
              <p className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-6">
                Adding online ordering to the LettuceEats app has been a game
                changer... It's driven 30% to 40% more online orders.
              </p>
              <footer className="mt-6">
                <p className="text-xl text-yellow-300 font-semibold">
                  Jennifer Bell
                </p>
                <p className="text-white text-opacity-80">
                  CMO at Lettuce Entertain You
                </p>
              </footer>
            </blockquote>
          </div>

          {/* Right side - Logo */}
          <div className="md:w-2/5 flex justify-center items-center">
            <div className="relative w-64 h-64 md:w-72 md:h-72 flex items-center justify-center">
              <Image
                src="/images/logos/lettuce-entertain-you-logo.png"
                alt="Lettuce Entertain You"
                width={280}
                height={280}
                className="object-contain"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              {/* Enhanced glow effect */}
              <div className="absolute -inset-4 bg-white/10 rounded-full blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
