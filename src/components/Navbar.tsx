"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    if (mobileMenuOpen) {
      // Trigger closing animation
      setIsClosing(true);

      // Delay actual closing to allow animation to complete
      setTimeout(() => {
        setMobileMenuOpen(false);
        setIsClosing(false);
      }, 300); // Match animation duration
    } else {
      setMobileMenuOpen(true);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Add keyframes for custom animations
  React.useEffect(() => {
    // Add custom animation styles
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes slideDown {
        from {
          opacity: 0;
          transform: translateY(-10px) scaleY(0.95);
        }
        to {
          opacity: 1;
          transform: translateY(0) scaleY(1);
        }
      }
      
      @keyframes slideUp {
        from {
          opacity: 1;
          transform: translateY(0) scaleY(1);
        }
        to {
          opacity: 0;
          transform: translateY(-10px) scaleY(0.95);
        }
      }
      
      .animate-slideDown {
        animation: slideDown 0.3s ease-in-out forwards;
      }
      
      .animate-slideUp {
        animation: slideUp 0.3s ease-in-out forwards;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const capabilityItems = [
    {
      icon: "Link 1",
      name: "Link 2",
      href: "Link 3",
    },
    {
      icon: "Link 1",
      name: "Link 2",
      href: "Link 3",
    },
    {
      icon: "Link 1",
      name: "Link 2",
      href: "Link 3",
    },
    {
      icon: "Link 1",
      name: "Link 2",
      href: "Link 3",
    },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 py-5">
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:justify-between max-w-7xl mx-auto">
        {/* Main Navbar */}
        <div
          className={`bg-[#F9F7FF] rounded-[16px] ${
            scrolled ? "py-2 md:py-3" : "py-4 md:py-6"
          } px-4 md:px-5 w-full md:max-w-[90%] shadow-sm transition-all duration-300 ease-in-out ${
            scrolled ? "shadow-md" : "shadow-sm"
          }`}
        >
          <nav className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="Focus Logo"
                  width={80}
                  height={40}
                  className={`transition-all duration-300 ease-in-out ${
                    scrolled ? "h-6 md:h-8" : "h-8 md:h-auto"
                  } w-auto`}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8 mx-auto">
              <Link
                href="#about"
                className={`text-[#221759] hover:text-[#201a55] font-bold ${
                  scrolled ? "text-sm" : "text-base"
                } transition-all duration-300 ease-in-out`}
              >
                About
              </Link>
              <div className="relative group">
                <button
                  className={`flex items-center text-[#221759] hover:text-[#201a55] font-bold ${
                    scrolled ? "text-sm" : "text-base"
                  } transition-all duration-300 ease-in-out`}
                  onClick={toggleDropdown}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  Capabilities
                  <svg
                    className={`ml-1 ${
                      scrolled ? "w-3 h-3" : "w-4 h-4"
                    } transition-all duration-300 ease-in-out`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown menu */}
                {dropdownOpen && (
                  <div
                    className="absolute mt-2 py-4 px-6 bg-white shadow-lg rounded-lg"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <div className="flex flex-col space-y-4 min-w-[280px]">
                      {capabilityItems.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="flex items-center text-[#221759] hover:text-[#201a55] transition-colors"
                        >
                          <span className="text-sm font-bold">{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <Link
                href="#process"
                className={`text-[#221759] hover:text-[#201a55] font-bold ${
                  scrolled ? "text-sm" : "text-base"
                } transition-all duration-300 ease-in-out`}
              >
                Our Process
              </Link>
              <Link
                href="#case-studies"
                className={`text-[#221759] hover:text-[#201a55] font-bold ${
                  scrolled ? "text-sm" : "text-base"
                } transition-all duration-300 ease-in-out`}
              >
                Case Studies
              </Link>
              <Link
                href="#lab"
                className={`text-[#221759] hover:text-[#201a55] font-bold ${
                  scrolled ? "text-sm" : "text-base"
                } transition-all duration-300 ease-in-out`}
              >
                Focused Lab
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="text-[#221759] hover:text-[#201a55] focus:outline-none transition-colors"
                onClick={toggleMobileMenu}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
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
          </nav>

          {/* Mobile Navigation */}
          {(mobileMenuOpen || isClosing) && (
            <div
              className={`md:hidden py-4 mt-4 bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ease-in-out transform origin-top ${
                isClosing ? "animate-slideUp" : "animate-slideDown"
              }`}
            >
              <div className="flex flex-col space-y-3 px-4 opacity-100 transition-opacity duration-500 ease-in-out">
                <Link
                  href="#about"
                  className="text-[#221759] hover:text-[#201a55] font-bold text-base px-2 py-2 transition-colors rounded-md hover:bg-gray-50"
                >
                  About
                </Link>

                {/* Mobile dropdown */}
                <div className="rounded-md hover:bg-gray-50">
                  <button
                    className="flex items-center justify-between w-full text-[#221759] hover:text-[#201a55] font-bold text-base px-2 py-2 text-left transition-colors"
                    onClick={toggleDropdown}
                  >
                    Capabilities
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {dropdownOpen && (
                    <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-100 ml-2">
                      {capabilityItems.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className="block text-[#221759] hover:text-[#201a55] font-bold text-sm py-2 px-2 transition-colors hover:bg-gray-50 rounded-md"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="#process"
                  className="text-[#221759] hover:text-[#201a55] font-bold text-base px-2 py-2 transition-colors rounded-md hover:bg-gray-50"
                >
                  Our Process
                </Link>
                <Link
                  href="#case-studies"
                  className="text-[#221759] hover:text-[#201a55] font-bold text-base px-2 py-2 transition-colors rounded-md hover:bg-gray-50"
                >
                  Case Studies
                </Link>
                <Link
                  href="#lab"
                  className="text-[#221759] hover:text-[#201a55] font-bold text-base px-2 py-2 transition-colors rounded-md hover:bg-gray-50"
                >
                  Focused Lab
                </Link>
                <div className="pt-3 pb-2">
                  <Link
                    href="#contact"
                    className="inline-flex items-center px-5 py-2.5 border-2 border-[#875FF5] text-black font-bold rounded-full hover:bg-[#221759] hover:border-[#221759] hover:text-white transition-colors w-full justify-center"
                  >
                    Contact us
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Contact us button - outside navbar */}
        <div className="hidden md:block ml-9">
          <Link
            href="#contact"
            className={`inline-block ${
              scrolled ? "px-5 py-2" : "px-6 py-2.5"
            } border-2 border-[#875FF5] text-black font-bold rounded-full hover:bg-[#221759] hover:border-[#221759] hover:text-white transition-all duration-300 ease-in-out min-w-[160px] text-center`}
          >
            <span className="inline-flex items-center justify-center whitespace-nowrap">
              Contact us
              <svg
                className={`ml-2 ${
                  scrolled ? "w-3 h-3" : "w-4 h-4"
                } transition-all duration-300 ease-in-out`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
