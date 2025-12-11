import { useState } from 'react';
import { ArrowRight, ShoppingBag, Store, X } from 'lucide-react';

export default function HeroSection() {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="relative bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100 text-gray-900 overflow-hidden" role="banner">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%232D52A0" fill-opacity="0.05"%3E%3Ccircle cx="7" cy="7" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-600/20 rounded-full px-6 py-2 mb-8 backdrop-blur-sm">
              <ShoppingBag className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600 text-sm font-medium">Shopify Integration Platform</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
                10x Your Shopify Sales
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed">
              Add Suppliers on Shopify to grow Your Shopify/Shopify Plus Catalog.  Then unlock exponential growth via Resellers and Influencers running Shopify or via Affiliate links.  Channel Connect makes it easy - handling all the onboarding, product and order integration.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <button
                onClick={scrollToContact}
                className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                aria-describedby="cta-description"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </button>
              <p id="cta-description" className="sr-only">Scroll to contact form to get started with Avetti Channel Connect</p>
            </div>
          </div>

          {/* Right Image / Diagram */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] aspect-square lg:aspect-[4/3] mx-auto select-none pointer-events-none lg:pointer-events-auto">

              {/* Connecting Lines (SVG Layer) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                {/* Line: Top to Left */}
                <line x1="50%" y1="20%" x2="20%" y2="80%" stroke="#94a3b8" strokeWidth="3" strokeDasharray="6 6" className="animate-pulse" />
                {/* Line: Top to Right */}
                <line x1="50%" y1="20%" x2="80%" y2="80%" stroke="#94a3b8" strokeWidth="3" strokeDasharray="6 6" className="animate-pulse" />
                {/* Line: Left to Right */}
                <line x1="20%" y1="80%" x2="80%" y2="80%" stroke="#94a3b8" strokeWidth="3" strokeDasharray="6 6" className="animate-pulse" />
              </svg>

              {/* Node 1: ACC (Top Center) */}
              <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-40 h-40 bg-white rounded-full shadow-2xl border-4 border-blue-500 flex flex-col items-center justify-center p-4 text-center z-10 transform hover:scale-110 transition-transform duration-300">
                <div className="text-3xl font-black text-blue-700 mb-1">ACC</div>
                <div className="text-xs font-bold text-gray-800 leading-tight">Avetti<br />Channel<br />Connect</div>
              </div>

              {/* Node 2: Shopify (Bottom Left) */}
              <div className="absolute bottom-[5%] left-[5%] w-36 h-36 bg-white rounded-full shadow-xl border-4 border-[#95BF47] flex flex-col items-center justify-center p-3 text-center z-10 transform hover:scale-110 transition-transform duration-300">
                <div className="bg-[#95BF47] p-2 rounded-full mb-2">
                  <ShoppingBag className="w-6 h-6 text-white" />
                </div>
                <div className="text-xs font-bold text-gray-800 leading-tight">Your Shopify<br />Store</div>
              </div>

              {/* Node 3: Suppliers (Bottom Right) */}
              <div className="absolute bottom-[5%] right-[5%] w-36 h-36 bg-white rounded-full shadow-xl border-4 border-indigo-500 flex flex-col items-center justify-center p-3 text-center z-10 transform hover:scale-110 transition-transform duration-300">
                <div className="bg-indigo-500 p-2 rounded-full mb-2">
                  <Store className="w-6 h-6 text-white" />
                </div>
                <div className="text-xs font-bold text-gray-800 leading-tight">External<br />Suppliers</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
