export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Brand */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Avetti Channel Connect</h2>
            <p className="text-gray-300 text-lg">
              Transforming Shopify stores into multi-channel revenue machines
            </p>
          </div>

          {/* Contact Links */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8 text-gray-300">
            <a
              href="mailto:channelconnect@avetti.ca"
              className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
            >
              channelconnect@avetti.ca
            </a>
            <span className="hidden md:inline text-gray-500">|</span>
            <a
              href="tel:+17057972105"
              className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
            >
              +1 (705) 797-2105
            </a>
            <span className="hidden md:inline text-gray-500">|</span>
            <a
              href="https://avetticommerce.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
            >
              avetticommerce.com
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex justify-center items-center text-sm text-gray-400">
              <p>© {currentYear} Avetti Commerce. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
