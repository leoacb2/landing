"use client";

import React from "react";

const featuresData = [
  {
    id: 1,
    title: "Know diner preferences",
    description:
      "Guests interact with your brand across multiple touchpoints, from in-person dining, to reservations and online ordering. Consolidate data to deliver personalized experiences based on guest preferences.",
    colorClass: "from-purple-600 to-indigo-600",
    borderClass: "border-t-purple-500",
  },
  {
    id: 2,
    title: "Design your own rewards",
    description:
      "Off the shelf loyalty solutions can force you into rigid frameworks that don't match how your restaurants actually operate. You need the flexibility to create a program that reflects your brand.",
    colorClass: "from-orange-500 to-amber-500",
    borderClass: "border-t-orange-500",
  },
  {
    id: 3,
    title: "Craft digital experiences",
    description:
      "Design experiences that capture your brand's personality. Move beyond generic white label solutions to build an app that feels like a natural extension of your dining rooms.",
    colorClass: "from-cyan-500 to-sky-500",
    borderClass: "border-t-cyan-500",
  },
];

const Features = () => {
  return (
    <section className="bg-white pt-16 pb-8 md:pb-12 lg:pb-16 overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-purple-600 font-semibold mb-3">
            /BE THE SOURCE OF TRUTH
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-4xl xl:text-5xl font-bold text-gray-900 mb-8">
            Own your digital experiences
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className={`overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white border-t-4 ${feature.borderClass}`}
            >
              <div
                className={`h-2 bg-gradient-to-r ${feature.colorClass}`}
              ></div>
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
