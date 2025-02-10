"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const adjust = (e: any, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start", // Scroll to the top of the section
    });
    setMobileMenuOpen(false); // Close the menu on navigation
  };

  return (
    <header className="bg-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            href="#"
            className="text-2xl font-black text-[#173364] font-sans"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img src="/logo.png" alt="logo" className="w-[120px] h-[50px]" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link
              href="#"
              className="text-[#173364] hover:text-white hover:bg-[#173364] px-4 py-2 rounded transition-all duration-300 font-sans"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Home
            </Link>
            <Link
              href="#services"
              className="text-[#173364] hover:text-white hover:bg-[#173364] px-4 py-2 rounded transition-all duration-300 font-sans"
              onClick={(e) => adjust(e, "services")}
            >
              Services
            </Link>
            <Link
              href="#academy"
              className="text-[#173364] hover:text-white hover:bg-[#173364] px-4 py-2 rounded transition-all duration-300 font-sans"
              onClick={(e) => adjust(e, "academy")}
            >
              Academy
            </Link>
            <Link
              href="#about"
              className="text-[#173364] hover:text-white hover:bg-[#173364] px-4 py-2 rounded transition-all duration-300 font-sans"
              onClick={(e) => adjust(e, "about")}
            >
              About Us
            </Link>
            <Link
              href="#contact"
              className="text-[#173364] hover:text-white hover:bg-[#173364] px-4 py-2 rounded transition-all duration-300 font-sans"
              onClick={(e) => adjust(e, "contact")}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Button */}
          <Button className="hidden md:block text-white bg-[#173364] hover:text-[#173364] hover:bg-white px-4 py-2 rounded transition-all duration-300">
            Get Started
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="flex flex-col space-y-4 md:hidden mt-4">
            <Link
              href="#"
              className="text-[#173364] hover:text-white hover:bg-[#173364] px-4 py-2 rounded transition-all duration-300 font-sans"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                setMobileMenuOpen(false);
              }}
            >
              Home
            </Link>
            <Link
              href="#services"
              className="text-[#173364] hover:text-white hover:bg-[#173364] px-4 py-2 rounded transition-all duration-300 font-sans"
              onClick={(e) => adjust(e, "services")}
            >
              Services
            </Link>
            <Link
              href="#academy"
              className="text-[#173364] hover:text-white hover:bg-[#173364] px-4 py-2 rounded transition-all duration-300 font-sans"
              onClick={(e) => adjust(e, "academy")}
            >
              Academy
            </Link>
            <Link
              href="#about"
              className="text-[#173364] hover:text-white hover:bg-[#173364] px-4 py-2 rounded transition-all duration-300 font-sans"
              onClick={(e) => adjust(e, "about")}
            >
              About Us
            </Link>
            <Link
              href="#contact"
              className="text-[#173364] hover:text-white hover:bg-[#173364] px-4 py-2 rounded transition-all duration-300 font-sans"
              onClick={(e) => adjust(e, "contact")}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
