"use client"

import { useState, useEffect } from 'react';

export default function DeploymentSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Infrastructure Setup",
      description: "Infrastructure Provider sets up machine images with Trusted Agent.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "App Development",
      description: "App Developers provide production builds and updates.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Business Configuration",
      description: "Business Owners configure secrets and deployments.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "DevOps Operations",
      description: "DevOps operate machines securely through MnMs Server.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((current) => (current + 1) % steps.length);
    }, 3000); // Change step every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Deployment Lifecycle
        </h2>
        
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative flex items-start p-6 rounded-xl transition-all duration-500 cursor-pointer
                ${activeStep === index 
                  ? 'bg-gray-50 shadow-md transform scale-[1.02]' 
                  : 'hover:bg-gray-50'
                }`}
              onClick={() => setActiveStep(index)}
            >
              {/* Step Number */}
              <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-4 transition-all duration-500
                ${activeStep === index 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                  : 'bg-gray-100 text-gray-600'
                }`}
              >
                {index + 1}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <div className={`text-blue-500 transition-all duration-500
                    ${activeStep === index ? 'transform scale-110 rotate-12' : ''}`}
                  >
                    {step.icon}
                  </div>
                </div>
                <p className={`text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed transition-all duration-500
  ${activeStep === index ? 'opacity-100' : 'opacity-70'}`}
>
                  {step.description}
                </p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gray-200"></div>
              )}
            </div>
          ))}
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300
                ${activeStep === index 
                  ? 'bg-blue-500 w-4' 
                  : 'bg-gray-300 hover:bg-gray-400'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 