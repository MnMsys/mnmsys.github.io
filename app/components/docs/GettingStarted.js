import Image from "next/image";
import architectureImg from "../../../public/images/architecturesection.png";
import legacy from "../../../public/images/legacy.png";
import saas from "../../../public/images/saas.png";


export default function GettingStarted() {
  return (
    <section id="getting-started" className="prose dark:prose-invert max-w-none px-4 sm:px-6">
      {/* Overview Section */}
      <div className="mb-16 sm:mb-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-8 tracking-tight">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            MnMs.io Documentation
          </span>
        </h1>
        <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6 md:p-10 mb-6 sm:mb-8 border border-gray-100 dark:border-gray-700">
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            MnMs enables business owners to delegate DevOps operations for production machines with no login permissions and no data access.
          </p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg border-l-4 border-blue-500">
              <div>
                <strong className="text-gray-900 dark:text-white">Business Owners:</strong>
                <span className="ml-1 text-sm sm:text-base block">Own data and infrastructure</span>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg border-l-4 border-blue-500">
              <div>
                <strong className="text-gray-900 dark:text-white">DevOps:</strong>
                <span className="ml-1 text-sm sm:text-base block">Run operations without data access</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Architecture */}
      <div className="mb-16 sm:mb-24">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-10">System Architecture</h2>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6 md:p-8 mb-6 border border-gray-100 dark:border-gray-700">
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6">
            Open source Trusted Agent with root-level access on production machines.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-4">Core Components</h3>
              <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                <li className="pb-3 border-b border-gray-100 dark:border-gray-700">
                  <div>
                    <strong className="text-gray-900 dark:text-white block mb-1">Trusted Agent</strong>
                    <div className="text-sm sm:text-base pl-2 border-l-2 border-gray-200 dark:border-gray-600">
                      <p className="py-1">- Monitoring Client: Collects machine data</p>
                      <p className="py-1">- Management Agent: Executes SafeOps Scripts</p>
                    </div>
                  </div>
                </li>
                <li className="pb-3 border-b border-gray-100 dark:border-gray-700">
                  <div>
                    <strong className="text-gray-900 dark:text-white block mb-1">MnM Cloud Server</strong>
                    <div className="text-sm sm:text-base pl-2 border-l-2 border-gray-200 dark:border-gray-600">
                      <p className="py-1">- Central cloud management</p>
                      <p className="py-1">- Processes monitoring data</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-4">Security Model</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="pb-3 border-b border-gray-100 dark:border-gray-700">
                  <div>
                    <strong className="text-gray-900 dark:text-white">SafeOps Scripts</strong> with Least-Privilege principles
                  </div>
                </li>
                <li className="pb-3 border-b border-gray-100 dark:border-gray-700">
                  <div>
                    <strong className="text-gray-900 dark:text-white">Root-level access</strong> without credential exposure
                  </div>
                </li>
                <li className="pb-3">
                  <div>
                    <strong className="text-gray-900 dark:text-white">Complete data isolation</strong> for business data
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Architecture Diagram */}
        <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6 md:p-8 my-6 border border-gray-100 dark:border-gray-700">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Architecture Overview
          </h3>
          <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
            <Image
              src={architectureImg}
              alt="MnMs Architecture Diagram"
              className="w-full h-auto"
              layout="responsive"
            />
          </div>
        </div>
      </div>
      

    
{/* Deployment Lifecycle */}
<div className="mb-16 sm:mb-24 ">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-10">Deployment Lifecycle</h2>
  <div className="grid grid-cols-1 md:grid-cols-1 gap-4 sm:gap-6 ">
    {/* Legacy Systems */}
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 sm:p-6 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all">
  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
    
    {/* Text Section */}
    <div className="w-full md:w-1/3">
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4">
        Legacy Systems
      </h3>
      <ul className="space-y-2 sm:space-y-3 text-gray-600 dark:text-gray-300">
        {[
          "Install MnM Agent on production machines",
          "Authorize DevOps via tenant account",
          "Operations without direct machine access"
        ].map((step, idx) => (
          <li key={idx} className="py-1 pl-2 border-l-2 border-gray-200 dark:border-gray-600">
            <span className="text-sm sm:text-base">{step}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Image Section */}
    <div className="w-full md:w-2/3">
      <div className="relative w-full h-48 sm:h-64 md:h-96 overflow-hidden rounded-lg">
        <Image
          src={legacy}
          alt="Legacy Diagram"
          className="object-contain w-full h-full"
          priority
        />
      </div>
    </div>
    
  </div>
</div>

    
    {/* SaaS Implementation */}


    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 sm:p-6 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all">
  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
    
    {/* Text Section */}
    <div className="w-full md:w-1/3">
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4">
      SaaS Implementation
      </h3>
      <ul className="space-y-2 sm:space-y-3 text-gray-600 dark:text-gray-300">
        {[
          "Provision machine images with secrets",
          "GitOps teams trigger deployments",
          "Continuous delivery pipelines"
        ].map((step, idx) => (
          <li key={idx} className="py-1 pl-2 border-l-2 border-gray-200 dark:border-gray-600">
            <span className="text-sm sm:text-base">{step}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* Image Section */}
    <div className="w-full md:w-2/3">
      <div className="relative w-full h-48 sm:h-64 md:h-96 overflow-hidden rounded-lg">
             <Image
          src={saas}
          alt="Legacy Diagram"
          className="object-contain w-full h-full"
          priority
        />
      </div>
    </div>
    
  </div>
</div>





  </div>
</div>

      {/* Infrastructure Setup */}
      <div className="mb-16 sm:mb-24">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-10">Infrastructure Setup</h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6 md:p-8 mb-6 border border-gray-100 dark:border-gray-700">
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6">
            One-time setup by Business Owners
          </p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Infrastructure Provisioning</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border-l-4 border-blue-500">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Cloud-Based</h4>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    IAM/PAM access in AWS, Azure, GCP
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border-l-4 border-blue-500">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Physical</h4>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    Servers in data center colocations
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">Secrets Provisioning</h3>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 pl-2 border-l-2 border-gray-200 dark:border-gray-600">
                Configure Tenant Account and service secrets on machine images
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-16 sm:mb-24">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-10">Security & Operations Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 sm:p-6 border border-gray-100 dark:border-gray-700 h-full">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 border-b pb-2 border-gray-100 dark:border-gray-700">{feature.title}</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                {feature.features.map((item, itemIdx) => (
                  <li key={itemIdx} className="py-1 pl-2 border-l-2 border-gray-200 dark:border-gray-600">
                    <span className="text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Operational Areas */}
      <div className="mb-16 sm:mb-24">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-10">Operational Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {operationalAreas.map((area, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 sm:p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 border-b pb-2 border-gray-100 dark:border-gray-700">{area.title}</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                {area.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="py-1 pl-2 border-l-2 border-gray-200 dark:border-gray-600">
                    <span className="text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Next Steps */}
      <div className="mb-16 sm:mb-24">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-10">Next Steps</h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6 md:p-8 border border-gray-100 dark:border-gray-700">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {nextSteps.map((item, idx) => (
              <a
                key={idx}
                href="#"
                className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group py-2 sm:py-3 border-b border-gray-100 dark:border-gray-700 last:border-0"
              >
                <span className="mr-2 sm:mr-3 transform group-hover:translate-x-1 transition-transform text-lg">→</span>
                <span className="text-sm sm:text-base font-medium">{item}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Data for better organization
const features = [
  {
    title: 'OS-Level Security',
    features: [
      'Unique OS user accounts',
      'Least Access Privilege',
      'Separate access spaces'
    ]
  },
  {
    title: 'Database Peer Security',
    features: [
      'OS-level credentials',
      'No password storage',
      'Granular access control'
    ]
  },
  {
    title: 'Multi-Tenant Isolation',
    features: [
      'Process sandboxing',
      'Secure co-location',
      'Resource isolation'
    ]
  },
  {
    title: 'Comprehensive Observability',
    features: [
      'End-to-end monitoring',
      'OpenTelemetry',
      'System instrumentation'
    ]
  },
  {
    title: 'SafeOps Scripts',
    features: [
      'Pre-validated operations',
      'Audit trails',
      'Business extensible'
    ]
  },
  {
    title: 'mTLS Authentication',
    features: [
      'Business-managed PKI',
      'Two-Factor Authentication',
      'Zero-Trust security'
    ]
  }
];

const operationalAreas = [
  {
    title: "Sync Forks",
    items: [
      "Code Version Control",
      "Software Staging",
      "Release Cycles",
      "Play store listings",
      "Production deployments"
    ]
  },
  {
    title: "BizOps",
    items: [
      "Product Management",
      "Data analysis",
      "Tenant Management",
      "Administrators (GUI)",
      "Reporting"
    ]
  },
  {
    title: "FinOps",
    items: [
      "Payments processing",
      "Refunds management",
      "Accounting integration",
      "Fraud management",
      "Usage-based billing"
    ]
  }
];

const nextSteps = [
  'Trusted Agent Installation',
  'SafeOps Script Reference',
  'Monitoring API Guide',
  'mTLS Configuration',
  'GitOps Integration',
  'Tenant Management'
];