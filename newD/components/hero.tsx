"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Header } from "./header";

export function Hero() {
  return (
    
    <section className="relative bg-gradient-to-r from-blue-600 to-[#193675] text-white overflow-hidden">

      <div className="absolute inset-0">
        <Image
          src="/bg_hero2.png"
          alt="Abstract background"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Shaping Tomorrow with AI, Cybersecurity, and Education
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto md:mx-0">
              Empowering businesses and individuals with cutting-edge technology
              and knowledge to thrive in the digital age.
            </p>
            <div className="flex space-x-4">
              <Button  size="lg" variant="secondary" 
              onClick={() => {
                document.getElementById("services")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}>
                Explore Services
              </Button>
              <Button size="lg" variant="secondary" 
              onClick={() => {
                document.getElementById("academy")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}>
                Join Academy
              </Button>
            </div>
          </div>
          {/* <div className="hidden md:block ">
            <Image
              src="/bg_hero.png"
              alt="NewD Innovation"
              width={600}
              height={600}
              className="rounded-lg shadow-md"
            />
          </div> */}
        </div>
      </div>
      {/* <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div> */}
    </section>
  );
}
