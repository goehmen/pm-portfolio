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
                className="w-6 h-6 text-gray-400" 
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
      </div>
    );
  }