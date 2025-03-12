"use client";

import React from "react";
import Image from "next/image";

const Expertise = () => {
  return (
    <section className="bg-white pt-16 pb-8 md:pb-12 lg:pb-16 overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-purple-600 font-semibold mb-3">/EXPERTISE</p>
          <h2 className="text-4xl sm:text-5xl md:text-4xl xl:text-5xl font-bold text-gray-900 mb-8">
            Loyalty keeps your guests <br />
            coming back for more
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          {/* Left side - Testimonial */}
          <div className="relative rounded-2xl overflow-hidden bg-purple-100 max-w-lg mx-auto w-full">
            <div className="relative z-10 bg-white rounded-2xl shadow-lg p-8 m-6 ml-8">
              <blockquote className="relative">
                <div className="text-3xl text-purple-700 absolute -top-2 -left-4">
                  "
                </div>
                <p className="text-lg md:text-xl font-medium text-gray-800 mb-6">
                  [Placeholder] Loyalty, to me, is about innovating. It's about
                  recognizing and providing better hospitality for our best
                  customers.
                </p>
                <footer className="mt-4">
                  <p className="text-lg text-purple-600 font-semibold">
                    Jennifer Bell
                  </p>
                  <p className="text-sm text-gray-600">
                    CMO at Lettuce Entertain You
                  </p>
                </footer>
              </blockquote>
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-200 to-purple-400 opacity-70"></div>
          </div>

          {/* Right side - Stats */}
          <div className="space-y-16 mt-8 md:mt-0 flex flex-col items-center">
            <div className="text-center">
              <h3 className="text-6xl md:text-7xl font-bold text-purple-600 mb-2">
                100%
              </h3>
              <div className="h-0.5 w-16 bg-purple-300 mx-auto mb-4"></div>
              <p className="text-xl md:text-2xl font-semibold text-gray-800">
                Ownership of guest data
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-6xl md:text-7xl font-bold text-purple-600 mb-2">
                47%
              </h3>
              <div className="h-0.5 w-16 bg-purple-300 mx-auto mb-4"></div>
              <p className="text-xl md:text-2xl font-semibold text-gray-800 max-w-xs mx-auto">
                Of loyalty members use their membership several times a month
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
