export default function FeaturesSection() {
  const features = [
    {
      title: 'OS Level Security Enforcement',
      icon: '🛡️',
      description: 'Advanced security at the operating system level',
    },
    {
      title: 'Peer Security on Database',
      icon: '🔒',
      description: 'End-to-end encryption for database communications',
    },
    {
      title: 'Multi-Tenant & Microservice Ready',
      icon: '🏗️',
      description: 'Built for modern cloud-native architectures',
    },
    {
      title: 'Instrumentation with Open Telemetry',
      icon: '📊',
      description: 'Comprehensive monitoring and tracing capabilities',
    },
    {
      title: 'Safe Scripts with Audit Logging',
      icon: '📝',
      description: 'Secure script execution with detailed audit trails',
    },
    {
      title: 'mTLS Zero-Trust Authentication',
      icon: '🔐',
      description: 'Mutual TLS for enhanced security and trust',
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Salient Features
            </span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative bg-gray-800/50 backdrop-blur-sm p-6 sm:p-7 md:p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <div className="relative">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-blue-400">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
