import { useEffect } from 'react';
import { CircleCheck, Mail, Phone } from 'lucide-react';

export default function ContactSection() {
  useEffect(() => {
    // Load Pipedrive form script dynamically
    const script = document.createElement('script');
    script.src = 'https://webforms.pipedrive.com/f/loader';
    script.async = true;
    
    // Check if script is already loaded
    const existingScript = document.querySelector('script[src="https://webforms.pipedrive.com/f/loader"]');
    if (!existingScript) {
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup function to remove script if component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100 text-gray-900" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div>
            <h2 id="contact-heading" className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Ready to 10x Your Shopify Sales?
            </h2>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Join hundreds of Shopify merchants who've transformed their single store into a multi-channel revenue machine. Get started today with zero risk.
            </p>

            {/* Benefits List */}
            <ul className="space-y-6 mb-8" role="list" aria-labelledby="benefits-heading">
              <h3 id="benefits-heading" className="sr-only">What you get when you contact us</h3>
              {[
                "Free consultation with our Channel Connect experts",
                "Custom integration plan for your specific business",
                "Access to our verified supplier and reseller network",
                "No setup fees, no transaction fees, cancel anytime"
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CircleCheck className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="space-y-4" role="contentinfo" aria-labelledby="contact-info-heading">
              <h3 id="contact-info-heading" className="sr-only">Contact Information</h3>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600" aria-hidden="true" />
                <a
                  href="mailto:channelconnect@avetti.ca"
                  className="text-gray-700 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded"
                >
                  channelconnect@avetti.ca
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600" aria-hidden="true" />
                <a
                  href="tel:+17057972105"
                  className="text-gray-700 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded"
                >
                  +1 (705) 797 2105
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-center">Get Started Today</h3>
            
            {/* Pipedrive Form */}
            <div className="pipedriveWebForms" data-pd-webforms="https://webforms.pipedrive.com/f/ckuocNo3uREZREksmrlr1d6MqeRGMd6zLhKCoI3sTOazmaHtUyBeNAtc816Jo7OfJN">
            </div>

            <p className="text-center text-gray-600 text-sm mt-6">
              By submitting this form, you agree to receive communications from Avetti Channel Connect.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
