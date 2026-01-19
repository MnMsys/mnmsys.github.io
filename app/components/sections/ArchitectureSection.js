import Image from 'next/image';

export default function ArchitectureSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          {/* Text Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                How MnMs Works
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </div>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              MnMs Trusted Agent runs on every production machine, providing monitoring and management capabilities through a secure cloud connection.
            </p>
            <ul className="space-y-4">
              {[
                'Monitoring Client communicates with Monitoring Server',
                'Management Agent executes Safe Scripts remotely',
                'No data access for DevOps teams'
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

    {/* Responsive Image Section */}
<div className="relative w-full bg-[#F8F6F5] aspect-[4/3] sm:aspect-[16/9] md:aspect-[5/3] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
  <Image
    src="/images/architecturesection.png"
    alt="MnMs Architecture Diagram"
    fill
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, (max-width: 1280px) 60vw, 50vw"
    className="object-contain"
    priority
  />
</div>

        </div>
      </div>
    </section>
  );
}
