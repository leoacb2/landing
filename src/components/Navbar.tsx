"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Initial check on mount to set correct state immediately
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed ${
        isScrolled ? "top-1" : "top-4"
      } left-0 right-0 z-50 mx-auto px-4 sm:px-6 lg:px-8 w-full transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto flex items-center">
        {/* Main Navbar */}
        <header className="relative flex-grow rounded-2xl overflow-hidden transition-all duration-300">
          <div
            className={`${
              isScrolled
                ? "bg-[#F9F7FF] shadow-lg py-2"
                : "bg-[#F9F7FF]/90 backdrop-blur-sm border border-white/20 py-4"
            } px-6 transition-all duration-300 w-full`}
          >
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/images/logo.png"
                    alt="Focus"
                    width={130}
                    height={40}
                    className={`${
                      isScrolled ? "h-7" : "h-8"
                    } w-auto transition-all duration-300`}
                    priority
                  />
                </Link>
              </div>

              {/* Desktop Navigation - Centered */}
              <div className="hidden md:flex flex-grow items-center justify-center">
                <nav className="flex items-center space-x-10">
                  <Link
                    href="#about"
                    className={`text-gray-800 hover:text-[#4F3890] font-medium transition-colors duration-300 ${
                      isScrolled ? "text-sm" : "text-base"
                    }`}
                  >
                    About
                  </Link>
                  <Link
                    href="#capabilities"
                    className={`text-gray-800 hover:text-[#4F3890] font-medium transition-colors duration-300 flex items-center ${
                      isScrolled ? "text-sm" : "text-base"
                    }`}
                  >
                    Capabilities
                    <svg
                      className={`ml-1 ${isScrolled ? "w-3 h-3" : "w-4 h-4"}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="#process"
                    className={`text-gray-800 hover:text-[#4F3890] font-medium transition-colors duration-300 ${
                      isScrolled ? "text-sm" : "text-base"
                    }`}
                  >
                    Our Process
                  </Link>
                  <Link
                    href="#case-studies"
                    className={`text-gray-800 hover:text-[#4F3890] font-medium transition-colors duration-300 ${
                      isScrolled ? "text-sm" : "text-base"
                    }`}
                  >
                    Case Studies
                  </Link>
                  <Link
                    href="#focused-lab"
                    className={`text-gray-800 hover:text-[#4F3890] font-medium transition-colors duration-300 ${
                      isScrolled ? "text-sm" : "text-base"
                    }`}
                  >
                    Focused Lab
                  </Link>
                </nav>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  type="button"
                  className="text-gray-800 hover:text-[#4F3890] focus:outline-none"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle mobile menu"
                >
                  <span className="sr-only">Open main menu</span>
                  {mobileMenuOpen ? (
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 mx-auto bg-[#F9F7FF]/95 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden absolute left-0 right-0 top-full">
              <div className="px-4 pt-2 pb-3 space-y-1">
                <Link
                  href="#about"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-[#4F3890] hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="#capabilities"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-[#4F3890] hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Capabilities
                </Link>
                <Link
                  href="#process"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-[#4F3890] hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Our Process
                </Link>
                <Link
                  href="#case-studies"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-[#4F3890] hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Case Studies
                </Link>
                <Link
                  href="#focused-lab"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-[#4F3890] hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Focused Lab
                </Link>
                <Link
                  href="#contact"
                  className="block px-6 py-3 my-2 rounded-full text-center text-[#1E0E4E] border-2 border-[#7664F1] font-medium bg-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact us <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          )}
        </header>

        {/* Contact Us Button - Outside the navbar */}
        <div className="hidden md:block ml-5">
          <Link
            href="#contact"
            className={`inline-flex items-center ${
              isScrolled ? "px-5 py-2 text-sm" : "px-6 py-3 text-base"
            } font-semibold text-[#1E0E4E] border-2 border-[#7664F1] bg-white hover:bg-[#F9F7FF] rounded-full transition-all duration-300 whitespace-nowrap`}
          >
            Contact us <span className="ml-1">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
