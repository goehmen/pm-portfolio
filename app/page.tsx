import { ThemeToggle } from "./components/ThemeToggle";

export default function Home() {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          {/* Theme Toggle */}
          <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>
        {/* Hero Section */}
        <section className="flex items-center justify-center min-h-screen relative">
            <div className="text-center px-4">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Greg Oehmen
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">
                Product Leader & AI-Native Builder
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400">
                Cloud Platforms • Fintech APIs • AI Strategy
            </p>
            </div>
            
            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg 
                className="w-18 h-18 text-gray-400 dark:text-gray-500" 
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
        
          
        <section id="about" className="py-20 px-4 bg-white dark:bg-gray-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              About
            </h2>
            
            <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
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
            <div className="p-6 bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-200">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Cloud Platforms
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  AWS, GCP, Azure • Kubernetes • Platform Engineering • DevOps
                </p>
              </div>
  
              <div className="p-6 bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-200">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Fintech & Payments
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Digital Wallets • Card APIs • Transaction Controls • Compliance
                </p>
              </div>
  
              <div className="p-6 bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-200">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  AI Strategy
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Product-Market Fit • MLOps • Computer Vision • Decision Engines
                </p>
              </div>
  
              <div className="p-6 bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-200">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Developer Tools
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  API Design • CLI Tools • Platform APIs • Developer Experience
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project Card 1 - Featured */}
            <div className="bg-white dark:bg-gray-800 dark:hover:bg-gray-700 p-6 rounded-lg border-2 border-blue-500 dark:border-blue-400 hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-200">
              <div className="mb-3">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Fractional Chief Product Officer
                </h3>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm font-medium rounded-full">
                  Live
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Professional services site showcasing fractional CPO expertise and product leadership portfolio
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
             <div className="bg-white dark:bg-gray-800 dark:hover:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  AI-Powered PRD Generator
                </h3>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
                  Coming Soon
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Tool to transform product ideas into structured PRDs using AI assistance
              </p>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white dark:bg-gray-800 dark:hover:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Platform Metrics Dashboard
                </h3>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
                  Coming Soon
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Real-time analytics dashboard for platform health and adoption metrics
              </p>
            </div>

            {/* Project Card 4 */}
            <div className="bg-white dark:bg-gray-800 dark:hover:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  API Documentation Hub
                </h3>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">
                  Coming Soon
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Interactive API documentation with live examples and sandbox environment
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
            Interested in fractional CPO services or discussing product strategy? Let's connect.
          </p>
          
          <form 
            action="https://formspree.io/f/meelkknl" 
            method="POST"
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white bg-white dark:bg-gray-700"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white bg-white dark:bg-gray-700"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows={5}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white bg-white dark:bg-gray-700"
                placeholder="Tell me about your project or inquiry..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Column 1: About */}
            <div>
              <h3 className="text-white font-bold mb-4">Greg Oehmen</h3>
              <p className="text-sm">
                Product leader specializing in cloud platforms, fintech APIs, and AI-enabled products.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-white font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-white transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Connect */}
            <div>
              <h3 className="text-white font-bold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a 
                    href="https://www.linkedin.com/in/grego" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a 
                    href="https://github.com/goehmen" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a 
                    href="https://gregoehmen.io" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    gregoehmen.io
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Tech Stack */}
            <div>
              <h3 className="text-white font-bold mb-4">Tech Stack</h3>
              <ul className="space-y-2 text-sm">
              <li>Next.js • TypeScript</li>
                <li>Tailwind CSS • Formspree</li>
                <li>Vercel • GitHub</li>
                <li>Claude AI • Cursor</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© {new Date().getFullYear()} Greg Oehmen. All rights reserved.</p>
          </div>
        </div>
      </footer>
      </div>
    );
  }