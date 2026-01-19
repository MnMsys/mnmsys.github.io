import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Network, Server, Shield, Code, GitBranch, Database, BarChart, Users } from 'lucide-react'

function page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main className="pt-16 pb-20 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="mt-10 text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Types of DevOps
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          MnMs.io brings separate support for different types of DevOps. Business Owners can choose to delegate different types of DevOps to different teams or all to a single team.
        </p>
        </section>

        {/* DevOps Types Grid */}
        <div className="grid md:grid-cols-2 gap-8">
        {/* NetOps */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                <Network className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white">NetOps</h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">NetOps control the cluster of machines that are running the service and the networking between them. They have access to:</p>
            <ul className="space-y-2 mb-4">
              {['Operational DNS Servers', 'Load Balancers', 'Keys to instantiate new machines from existing Machine Images'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  {item}
                </li>
              ))}
          </ul>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
              <p className="font-medium text-blue-800 dark:text-blue-300 mb-2">MnMs support for NetOps:</p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">MnMs Agent includes a 'Cluster Manager' that reads configuration from a private git repository. When the network changes, NetOps update the repo and the MnM Manager triggers agents to apply changes coherently across the system, including:</p>
              <ul className="space-y-2">
                {['Iptables rules for firewalling', 'Web server IP bindings'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    {item}
                  </li>
                ))}
          </ul>
            </div>
        </section>

        {/* SysOps */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                <Server className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white">SysOps</h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">MnM Agent includes a 'Process Manager' to manage user accounts and system processes. It supports:</p>
            <ul className="space-y-2">
              {[
                'System Monitoring (CPU, RAM, Disk I/O, Process count)',
                'System Management (initialize microservices)',
                'System software install/update',
                'Antivirus and OS patches',
                'File system and storage handling'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  {item}
                </li>
              ))}
          </ul>
        </section>

        {/* SecOps */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-xl">
                <Shield className="w-8 h-8 text-red-600 dark:text-red-400" />
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white">SecOps</h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">MnM Agent includes an 'Audit Manager' for tracking:</p>
            <ul className="space-y-2">
              {[
                'All logins and sudo actions',
                'Syslog copies',
                'Client access logs',
                'File transfer and database access logs'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  {item}
                </li>
              ))}
          </ul>
        </section>

        {/* AppOps */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
                <Code className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white">AppOps</h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300">MnM Agent includes an 'App Manager' allowing developers to instrument code for logs, metrics, and traces. The App Manager sends telemetry data and allows changing app environment severity levels.</p>
        </section>

        {/* GitOps */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl">
                <GitBranch className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white">GitOps</h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300">MnM Agent includes a 'Build Manager' which pulls new builds from repositories and deploys them. It maintains build history and supports rollback when necessary.</p>
        </section>

        {/* DbOps */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl">
                <Database className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white">DbOps</h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300">MnM Agent includes a 'Database Manager' for handling database replication, heartbeat monitoring, primary-standby switching, and read-only instance setup.</p>
        </section>

        {/* DataOps */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-pink-100 dark:bg-pink-900/30 rounded-xl">
                <BarChart className="w-8 h-8 text-pink-600 dark:text-pink-400" />
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white">DataOps</h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">Unlike DbOps, DataOps handles internal databases, tables, and tablespaces. MnM Agent includes a 'Data Manager' for:</p>
            <ul className="space-y-2">
              {[
                'Allocating volumes for tablespaces',
                'Downloading volumes locally',
                'Setting up logical replication to data sinks'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                  {item}
                </li>
              ))}
          </ul>
        </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default page
