import Button from "../Button";

export default function CTASection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
      <div className="max-w-2xl mx-auto relative z-10">
        <div className="mb-4 sm:mb-5 md:mb-6">
          <span className="inline-block bg-white/8 text-gray-100 text-xs sm:text-sm md:text-base font-medium px-3 py-1 sm:px-4 sm:py-1.5 md:px-5 md:py-2 rounded-full backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
            Trusted by Leading Enterprises
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          See MnMs in Action
        </h2>

        <p className="text-sm sm:text-base md:text-xl text-gray-300/90 mb-5 sm:mb-6 md:mb-8 max-w-xl mx-auto leading-relaxed">
          Discover how MnMs revolutionizes production security with intelligent, automated protection systems.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
          <Button>Book a Demo</Button>
        </div>

        <div className="mt-4 sm:mt-5 md:mt-8 text-xs sm:text-sm md:text-lg text-gray-100">
          No credit card required • 30-day free trial
        </div>
      </div>

      {/* Responsive background elements */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,#fff_1px,transparent_1px)] bg-[size:20px_20px] sm:bg-[size:30px_30px] md:bg-[size:40px_40px] animate-pulse-slow"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent mix-blend-soft-light"></div>
    </section>
  );
}
