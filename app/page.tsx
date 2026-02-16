export default function Home() {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="flex items-center justify-center min-h-screen relative">
            <div className="text-center px-4">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
                Greg Oehmen
            </h1>
            <p className="text-xl text-gray-600 mb-2">
                Product Leader & AI-Native Builder
            </p>
            <p className="text-lg text-gray-500">
                Cloud Platforms • Fintech APIs • AI Strategy
            </p>
            </div>
            
            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg 
                className="w-18 h-18 text-gray-400" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
            >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
            </div>
        </section>
        
          
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              About
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Senior product leader with 12+ years building cloud platforms, 
                fintech APIs, and AI-enabled products. Currently fractional CPO 
                for early-stage AI startups at Spatial Capital and Hextropian.ai.
              </p>
              
              <p className="text-lg">
                Led product strategy at Visa ($25M portfolio, 20%+ CAGR), scaled 
                Pivotal from 0 to $250M to IPO, and built developer platforms at 
                Salesforce serving 170k+ servers.
              </p>
              
              <p className="text-lg">
                Passionate about building AI-native products that solve real problems. 
                Combining deep technical systems thinking with proven commercial 
                execution.
              </p> 
              </div>
  
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Cloud Platforms
                </h3>
                <p className="text-gray-600">
                  AWS, GCP, Azure • Kubernetes • Platform Engineering • DevOps
                </p>
              </div>
  
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Fintech & Payments
                </h3>
                <p className="text-gray-600">
                  Digital Wallets • Card APIs • Transaction Controls • Compliance
                </p>
              </div>
  
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  AI Strategy
                </h3>
                <p className="text-gray-600">
                  Product-Market Fit • MLOps • Computer Vision • Decision Engines
                </p>
              </div>
  
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Developer Tools
                </h3>
                <p className="text-gray-600">
                  API Design • CLI Tools • Platform APIs • Developer Experience
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Projects Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project Card 1 - Featured */}
            <div className="bg-white p-6 rounded-lg border-2 border-blue-500 hover:shadow-lg transition-shadow duration-200">
              <div className="mb-3">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Fractional Chief Product Officer
                </h3>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                  Live
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                My professional services practice offering strategic product leadership for early-stage startups and growth companies (gregoehmen.io)
              </p>
              <a 
                href="https://gregoehmen.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Visit Website →
              </a>
            </div>
  
             {/* Project Card 2 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900">
                  AI-Powered PRD Generator
                </h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  Coming Soon
                </span>
              </div>
              <p className="text-gray-600">
                Tool to transform product ideas into structured PRDs using AI assistance
              </p>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900">
                  Platform Metrics Dashboard
                </h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  Coming Soon
                </span>
              </div>
              <p className="text-gray-600">
                Real-time analytics dashboard for platform health and adoption metrics
              </p>
            </div>

            {/* Project Card 4 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900">
                  API Documentation Hub
                </h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  Coming Soon
                </span>
              </div>
              <p className="text-gray-600">
                Interactive API documentation with live examples and sandbox environment
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>
    );
  }
