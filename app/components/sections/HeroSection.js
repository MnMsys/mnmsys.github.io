"use client";

import Button from "../Button";

export default function HeroSection() {
  return (
    <section className="relative py-10 xl:h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-10 h-full flex flex-col justify-center items-center text-center space-y-2 py-6">
        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-bold space-y-4">
          <span 
            className="block pb-1 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent animate-fade-in-out"
            style={{ animationDelay: "0s" }}
          >
            Allows business owners
          </span>
          <span
            className="block pb-1 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent animate-fade-in-out"
            style={{ animationDelay: "0.5s" }}
          >
            to engage DevOps teams
          </span>
          <span
            className="block pb-1  bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent animate-fade-in-out"
            style={{ animationDelay: "1s" }}
          >
            to fully monitor and manage
          </span>
          <span
            className="block pb-1 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent animate-fade-in-out"
            style={{ animationDelay: "2s" }}
          >
            their production machines
          </span>
          <span
            className="block pb-1 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-fade-in-out"
            style={{ animationDelay: "1.5s" }}
          >
            with no login required
          </span>
          <span
            className="block pb-1 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent animate-fade-in-out"
            style={{ animationDelay: "2.5s" }}
          >
            and no access to data
          </span>
        </h1>

        <div className="flex flex-col mt-6 sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <Button isLink href="#home">
            Request a Demo
          </Button>
          <Button
            isLink
            href="#about"
            hasHover={false}
            className="hover:bg-white/10 transition-colors duration-200 bg-none border-2 border-white/20 rounded-full"
          >
            Learn More
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInOut {
          0%,
          100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
        .animate-fade-in-out {
          animation: fadeInOut 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}