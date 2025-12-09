import { CircleCheck, X, Check } from 'lucide-react';

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-white" aria-labelledby="benefits-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Comparison Section */}
        <div className="mb-24">
          <h2 className="text-3xl lg:text-5xl font-bold text-center text-gray-900 mb-16">
            Connecting with Suppliers Shouldn't Be This Hard
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            {/* New Way - Left Side */}
            <div className="bg-green-50/50 rounded-3xl p-8 lg:p-10 border border-green-100">
              <h3 className="text-2xl font-bold text-green-700 mb-8 flex items-center gap-3">
                The New Way (Simple & Automated)
              </h3>
              <ul className="space-y-6">
                {[
                  "Onboard suppliers from existing stores directly to your Shopify store — hassle-free",
                  "Connect offline suppliers to your Shopify platform without the manual work",
                  "Create reseller networks and multiply your revenue stream in a few clicks",
                  "Start selling new products — completely automated"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-800 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Old Way - Right Side */}
            <div className="bg-red-50/50 rounded-3xl p-8 lg:p-10 border border-red-100">
              <h3 className="text-2xl font-bold text-red-600 mb-8 flex items-center gap-3">
                The Old Way (Time-Consuming & Risky)
              </h3>
              <ul className="space-y-6">
                {[
                  "Face inconsistent pricing structures and mismatched product information",
                  "Lack accurate, up-to-date data on stock levels and delivery timelines",
                  "Go through endless manual process to sync data across suppliers",
                  "Constantly chase suppliers for missing product details"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-4 h-4 text-red-600" />
                    </div>
                    <span className="text-gray-800 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* What You Get Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
            What You Get With Channel Connect
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              "Automated reseller and influencer onboarding",
              "Integrated payment splitting via Stripe",
              "Seamless logistics through Sendcloud & Easyship*",
              "Real-time inventory synchronization",
              "Xero, ERP, and warehouse integration",
              "AI-powered workflow automation via N8N",
              "Wholesale B2B stores for resellers",
              "Multi-marketplace expansion capability",
              "Advanced analytics and reporting dashboard",
              "No Transaction Fees or Revenue sharing"
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CircleCheck className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <p className="text-sm text-gray-500">* Coming Soon</p>
          </div>
        </div>
      </div>
    </section>
  );
}
