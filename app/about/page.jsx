import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Shield, Server, Code, Users, Zap } from 'lucide-react'

function page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main className="pt-16 pb-20 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="mt-10 text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            About MnMs.io
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            MnMs (Monitoring & Management System) is designed to help Business Owners and DevOps teams manage production machines securely, without compromising data or granting direct access.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-16 bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
              <Zap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white">Our Mission</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
            We aim to empower organizations with full control over their infrastructure by enabling DevOps to manage systems remotely and securely—without the need to access sensitive data or login credentials.
          </p>
        </section>

        {/* How It Works Section */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
              <Server className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white">How MnMs Works</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Monitoring Client",
                description: "Collects data and communicates with MnMs Monitoring Server, providing real-time insights into your infrastructure.",
              },
              {
                title: "Management Agent",
                description: "Uses SafeOps scripts to execute tasks without login access, ensuring secure operations.",
              }
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-4">{item.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Features Section */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
              <Shield className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white">Key Features</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
                title: "Zero-trust Architecture",
                description: "Using mTLS authentication for maximum security"
              },
              {
                icon: <Server className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
                title: "OS-level Security",
                description: "Peer-authenticated database access"
              },
              {
                icon: <Code className="w-6 h-6 text-green-600 dark:text-green-400" />,
                title: "Safe Scripts",
                description: "Auditable management scripts"
              },
              {
                icon: <Users className="w-6 h-6 text-orange-600 dark:text-orange-400" />,
                title: "Multi-tenant",
                description: "Full microservice isolation"
              },
              {
                icon: <Server className="w-6 h-6 text-red-600 dark:text-red-400" />,
                title: "Observability",
                description: "OpenTelemetry integration"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  {feature.icon}
                  <h3 className="text-md sm:text-lg font-semibold text-gray-800 dark:text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
              <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white">Why Choose MnMs.io?</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
            MnMs lets you safely outsource DevOps without giving up control. It's built for security-first organizations who want visibility and efficiency without compromise. MnMs enables full lifecycle deployment support for both legacy and modern (SaaS) infrastructures.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default page
