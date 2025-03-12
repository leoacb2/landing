"use client";

import React from "react";
import Container from "../ui/Container";

const testimonials = [
  {
    id: 1,
    quote:
      "This platform has completely transformed how our team works. We've seen a 40% increase in productivity since implementing it.",
    author: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    avatar: "/assets/images/avatar-1.jpg",
  },
  {
    id: 2,
    quote:
      "The customer service is exceptional. Whenever we've had an issue, the team has been quick to respond and always found a solution.",
    author: "David Chen",
    role: "CTO",
    company: "StartupX",
    avatar: "/assets/images/avatar-2.jpg",
  },
  {
    id: 3,
    quote:
      "I was skeptical at first, but after using the platform for just a month, I can't imagine running our business without it.",
    author: "Alexandra Patel",
    role: "Operations Director",
    company: "GrowthCo",
    avatar: "/assets/images/avatar-3.jpg",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear what our customers have to say about their experience with our
            platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col"
            >
              <div className="mb-6 flex-grow">
                <svg
                  className="h-8 w-8 text-gray-300 mb-4"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-gray-600 italic">{testimonial.quote}</p>
              </div>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden">
                  {/* Remove comment when you add actual avatar images */}
                  {/* <Image
                    src={testimonial.avatar}
                    alt={`${testimonial.author} avatar`}
                    width={40}
                    height={40}
                    className="object-cover"
                  /> */}
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">
                    {testimonial.author}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
