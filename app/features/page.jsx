import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { 
  Server, 
  Database, 
  Code, 
  Shield, 
  GitBranch, 
  Network, 
  Package, 
  Users, 
  FileText, 
  BarChart, 
  Settings, 
  Lock, 
  HardDrive, 
  Clock, 
  Box, 
  Globe, 
  Database as DbIcon, 
  Container, 
  Cpu, 
  Wifi, 
  Flame, 
  Key, 
  MapPin, 
  FileSearch, 
  Database as DbSearch, 
  Terminal, 
  Hammer, 
  Rocket, 
  Table, 
  Database as DbManage, 
  Activity, 
  RefreshCw 
} from 'lucide-react'

function page() {
  const features = {
    Core: [
      { name: "Agent to Server Communications", icon: Server, color: "text-blue-600 dark:text-blue-400" },
      { name: "End-to-End Encryption", icon: Lock, color: "text-purple-600 dark:text-purple-400" },
      { name: "GIT controller", icon: GitBranch, color: "text-orange-600 dark:text-orange-400" },
      { name: "Safe-Script Executor", icon: Terminal, color: "text-green-600 dark:text-green-400" },
      { name: "Stream Controllers", icon: RefreshCw, color: "text-pink-600 dark:text-pink-400" },
      { name: "Secrets Vault", icon: Shield, color: "text-indigo-600 dark:text-indigo-400" },
      { name: "Cache Controller", icon: HardDrive, color: "text-yellow-600 dark:text-yellow-400" },
      { name: "Core Instrumentation", icon: Settings, color: "text-red-600 dark:text-red-400" },
      { name: "Open Telemetry", icon: BarChart, color: "text-teal-600 dark:text-teal-400" },
      { name: "PKI Support", icon: Key, color: "text-cyan-600 dark:text-cyan-400" },
      { name: "Tenant Management", icon: Users, color: "text-emerald-600 dark:text-emerald-400" },
      { name: "Disk Space Controller", icon: HardDrive, color: "text-amber-600 dark:text-amber-400" },
      { name: "Scheduled-Jobs", icon: Clock, color: "text-violet-600 dark:text-violet-400" },
      { name: "Volume Controller", icon: Box, color: "text-rose-600 dark:text-rose-400" },
      { name: "Web Server Controller (NGINX)", icon: Globe, color: "text-sky-600 dark:text-sky-400" },
      { name: "Database Controller (Postgresql)", icon: Database, color: "text-fuchsia-600 dark:text-fuchsia-400" }, 
    ],
    "Process Manager": [
        { name: "User Account Manager", icon: Users, color: "text-blue-600 dark:text-blue-400" },
        { name: "Sandbox Controller", icon: Shield, color: "text-purple-600 dark:text-purple-400" },
        { name: "Database Controller", icon: Database, color: "text-orange-600 dark:text-orange-400" },
        { name: "Container Controller (Docker & Podman)", icon: Container, color: "text-green-600 dark:text-green-400" },
        { name: "SysInfo Instrumentation", icon: Cpu, color: "text-pink-600 dark:text-pink-400" },
        { name: "Package Controller (Install, Update, Upgrade Packages)", icon: Package, color: "text-indigo-600 dark:text-indigo-400" },],
    "Network Manager": [  
        { name: "Firewall Controller", icon: Flame, color: "text-yellow-600 dark:text-yellow-400" },
        { name: "Authentication Controller", icon: Lock, color: "text-red-600 dark:text-red-400" },
        { name: "IP Controller", icon: MapPin, color: "text-teal-600 dark:text-teal-400" },],
    "Audit Manager": [ 
        { name: "File System Log Analyzer", icon: FileText, color: "text-cyan-600 dark:text-cyan-400" },
        { name: "Database Access Analyzer", icon: DbSearch, color: "text-emerald-600 dark:text-emerald-400" },
        { name: "Script Execution Analyzer", icon: Terminal, color: "text-amber-600 dark:text-amber-400" },  ],
    "Build Manager" : [ 
        { name: "Deployment Controller", icon: Rocket, color: "text-violet-600 dark:text-violet-400" },
        { name: "Database Schema Controller", icon: Table, color: "text-rose-600 dark:text-rose-400" },],
    "Database Manager":[
        { name: "HA Controller", icon: Activity, color: "text-sky-600 dark:text-sky-400" },
        { name: "Replication Monitor", icon: RefreshCw, color: "text-fuchsia-600 dark:text-fuchsia-400" }],
    "Data Manager": [
      { name: "Tablespace Controller", icon: Table, color: "text-blue-600 dark:text-blue-400" },
      { name: "Logical Replication Controller", icon: RefreshCw, color: "text-purple-600 dark:text-purple-400" }
    ],
    "App Manager": [
      { name: "Receive telemetry data from apps", icon: BarChart, color: "text-orange-600 dark:text-orange-400" },
      { name: "App environment controller", icon: Settings, color: "text-green-600 dark:text-green-400" }
    ]
  };

  const sectionColors = {
    "Core": "from-blue-600 to-purple-600",
    "Process Manager": "from-green-600 to-teal-600",
    "Network Manager": "from-purple-600 to-pink-600",
    "Audit Manager": "from-orange-600 to-red-600",
    "Build Manager": "from-indigo-600 to-blue-600",
    "Database Manager": "from-cyan-600 to-blue-600",
    "Data Manager": "from-violet-600 to-purple-600",
    "App Manager": "from-emerald-600 to-green-600"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main className="pt-16 pb-20 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="mt-10 text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            MnMs Product Features
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Discover the comprehensive suite of features that make MnMs the ultimate DevOps management solution.
          </p>
        </section>

        {/* Features Grid */}
        <div className="space-y-12">
          {Object.entries(features).map(([section, items]) => (
            <div key={section} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
              <h2 className={`text-2xl font-semibold mb-6 text-gray-800 dark:text-white flex items-center gap-3 bg-gradient-to-r ${sectionColors[section]} bg-clip-text text-transparent`}>
                {section === "Core" && <Server className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
                {section === "Process Manager" && <Settings className="w-6 h-6 text-green-600 dark:text-green-400"/>}
                {section === "Network Manager" && <Network className="w-6 h-6 text-purple-600 dark:text-purple-400" />}
                {section === "Audit Manager" && <FileSearch className="w-6 h-6 text-orange-600 dark:text-orange-400"/>}
                {section === "Build Manager" && <Hammer className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />}
                {section === "Database Manager" && <DbManage className="w-6 h-6 text-cyan-600 dark:text-cyan-400"/>}
                {section === "Data Manager" && <Database className="w-6 h-6 text-violet-600 dark:text-violet-400" />}
                {section === "App Manager" && <Code className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />}
                {section}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-md"
                  >
                    <div className="p-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 text-md">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default page
