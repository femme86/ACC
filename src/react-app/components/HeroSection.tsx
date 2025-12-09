import { useState } from 'react';
import { ArrowRight, ShoppingBag, X } from 'lucide-react';

export default function HeroSection() {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openImageModal = () => {
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
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

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <button
                onClick={openImageModal}
                className="group focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded-2xl"
                aria-label="Click to view full integration diagram"
              >
                <img
                  src="https://mocha-cdn.com/01990be7-16b6-7d5d-9cf3-33af3b0ca06a/ChannelConnect.jpg"
                  alt="Integration diagram showing Avetti Channel Connect ecosystem"
                  className="w-[576px] h-auto rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform group-hover:scale-105 cursor-pointer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-lg text-sm font-medium">
                    Click to enlarge
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal with Scroll */}
      {isImageModalOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeImageModal}
        >
          <div className="relative w-full h-full max-w-6xl max-h-[85vh] bg-white rounded-2xl">
            {/* Close Button */}
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 z-20 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-lg"
              aria-label="Close image popup"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Scrollable Image Container */}
            <div 
              className="w-full h-full overflow-auto p-8 pt-16"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src="https://mocha-cdn.com/01990be7-16b6-7d5d-9cf3-33af3b0ca06a/ChannelConnect.jpg"
                alt="Full integration diagram showing how Avetti Channel Connect links Shopify stores with suppliers, resellers, influencers, payment systems, logistics providers, and AI automation tools"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
