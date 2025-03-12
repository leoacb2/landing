"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-white pt-8 pb-8 md:pb-12 lg:pb-16 overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-[#4F3890] via-[#8760F6] to-[#4CD6E9] rounded-3xl overflow-hidden relative">
          {/* Main hero content */}
          <div className="flex flex-col md:flex-row md:items-start justify-between pt-8 pb-0 md:py-16 px-4 md:pl-12 lg:pl-16 md:pr-12 lg:pr-16 relative">
            {/* Left side content */}
            <div className="md:w-1/2 lg:max-w-2xl z-10 text-center md:text-left pt-0">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Handcrafted loyalty
                <br />
                as unique as your restaurants
              </h1>
              <p className="mt-6 md:mt-8 text-lg sm:text-xl text-white/90 leading-relaxed">
                Understand your guests and build loyalty across concepts with
                purpose built software that puts you in control
              </p>
              <div className="mt-8 md:mt-10">
                <Link
                  href="#"
                  className="group inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-white text-[#221759] rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-gradient-to-r hover:from-white hover:to-gray-50 hover:text-[#4F3890] hover:border-[#8760F6]/30 relative overflow-hidden"
                >
                  <span className="relative z-10">Get started</span>
                  <svg
                    className="w-5 h-5 ml-2 transition-transform duration-300 relative z-10 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                  {/* Glow effect on hover */}
                  <span className="absolute inset-0 bg-gradient-to-r from-[#8760F6]/10 to-[#4CD6E9]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
              </div>
            </div>

            {/* Right side: App mockup image */}
            <div className="md:w-1/2 flex justify-center md:justify-end items-end mt-12 md:mt-0 md:absolute md:bottom-0 md:right-12">
              <div className="relative w-auto max-w-[280px] sm:max-w-[320px] md:max-w-[360px]">
                <Image
                  src="/images/hero-image.png"
                  alt="Focus restaurant analytics platform"
                  width={450}
                  height={800}
                  className="w-auto h-auto object-contain md:translate-y-2"
                  priority
                />
                {/* Add a subtle glow effect */}
                <div className="absolute -inset-1 bg-indigo-500/20 rounded-3xl blur-xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
