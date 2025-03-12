"use client";

import React from "react";
import Image from "next/image";
import Container from "../ui/Container";

const Partners = () => {
  return (
    <section className="relative bg-white py-12 md:py-16">
      {/* Gradient overlay for smooth transition from Hero section */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#6BB5C9]/10 to-white -z-10"></div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-semibold text-gray-900">
            Trusted by top restaurants and brands
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center">
          {/* Company logos */}
          <div className="flex justify-center items-center h-16 lg:h-20 bg-gray-50 rounded-lg p-3 shadow-sm">
            <Image
              src="/images/logos/Lettuce Entertain You Logo  3.png"
              alt="Lettuce Entertain You"
              width={180}
              height={70}
              className="h-auto max-h-12 w-auto object-contain"
            />
          </div>
          <div className="flex justify-center items-center h-16 lg:h-20 bg-gray-50 rounded-lg p-3 shadow-sm">
            <Image
              src="/images/logos/Hogsalt Logo 1.png"
              alt="Hogsalt"
              width={180}
              height={70}
              className="h-auto max-h-12 w-auto object-contain"
            />
          </div>
          <div className="flex justify-center items-center h-16 lg:h-20 bg-gray-50 rounded-lg p-3 shadow-sm">
            <Image
              src="/images/logos/DoorDash-logo 1.png"
              alt="DoorDash"
              width={180}
              height={70}
              className="h-auto max-h-12 w-auto object-contain"
            />
          </div>
          <div className="flex justify-center items-center h-16 lg:h-20 bg-gray-50 rounded-lg p-3 shadow-sm">
            <Image
              src="/images/logos/alamo drafthouse 1.png"
              alt="Alamo"
              width={180}
              height={70}
              className="h-auto max-h-12 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
