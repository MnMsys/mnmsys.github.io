export default function RoleAccessSection() {
  const roles = [
    {
      title: 'Infrastructure Providers',
      desc: 'Provision and manage machine images with Trusted Agent.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      color: 'from-blue-400 to-purple-400'
    },
    {
      title: 'App Developers',
      desc: 'Deliver updates and builds continuously with secure deployment.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: 'from-blue-400 to-purple-400'
    },
    {
      title: 'Business Owners',
      desc: 'Retain full control and ownership of data with zero-trust security.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: 'from-blue-400 to-purple-400'
    },
    {
      title: 'DevOps',
      desc: 'Execute tasks securely via Safe Scripts without direct access.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'from-blue-400 to-purple-400'
    }
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 md:px-8 lg:px-10 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Role-Based Access
            </span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-xl mx-auto text-sm sm:text-base">
            Secure access control for different stakeholders in your organization
          </p>
        </div>

        {/* Grid of Roles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {roles.map((role, idx) => (
            <div
              key={idx}
              className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg border border-white/10 transition-transform hover:scale-[1.02]"
            >
              <div className="p-6 sm:p-8">
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-r ${role.color} p-3 sm:p-4 text-white mb-5 sm:mb-6`}>
                  {role.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                  {role.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  {role.desc}
                </p>
                <div className="mt-4 sm:mt-6">
                  <a href="#" className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
                    Learn more →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
