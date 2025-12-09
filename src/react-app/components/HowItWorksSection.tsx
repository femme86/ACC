import { Link, Users, TrendingUp, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: "01",
    icon: Link,
    title: "Connect Your Shopify",
    description: "Link your Shopify/Shopify Plus store to our platform in under 2 minutes with one-click integration.",
    details: "Secure API connection that syncs your products, inventory, and settings automatically."
  },
  {
    number: "02",
    icon: Users,
    title: "Choose Your Suppliers & Channels",
    description: "Browse our network of verified suppliers and select influencers/resellers to expand your reach.",
    details: "Access verified suppliers and thousands of potential sales channels across different markets."
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Watch Sales Multiply",
    description: "Sit back as orders flow in automatically from multiple channels while payments split seamlessly.",
    details: "Complete automation handles inventory, fulfillment, payments, and customer service."
  }
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50" aria-labelledby="how-it-works-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 id="how-it-works-heading" className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get from zero to 10x revenue in 3 simple steps. No technical knowledge required.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Number Circle */}
                <div className="flex justify-center mb-6">
                  <div className="relative w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center lg:text-left">
                  <div className="flex justify-center lg:justify-start mb-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {step.details}
                  </p>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center lg:hidden mt-8 mb-4">
                    <ArrowRight className="w-6 h-6 text-blue-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Integration Ecosystem Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              The Complete Integration Ecosystem
            </h3>
            <p className="text-lg text-gray-600">
              See how everything connects seamlessly in our unified platform
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
            <img
              src="https://mocha-cdn.com/01990be7-16b6-7d5d-9cf3-33af3b0ca06a/ChannelConnect.jpg"
              alt="Comprehensive integration diagram showing how Avetti Channel Connect links Shopify stores with suppliers, resellers, influencers, payment systems like Stripe, logistics providers like Sendcloud and Easyship, and AI automation tools including OpenAI, Claude, and Gemini, all connected in a unified ecosystem"
              className="w-4/5 h-auto rounded-2xl shadow-lg mx-auto"
              loading="lazy"
            />
            <div className="text-center mt-8">
              <p className="text-gray-600 text-lg">
                One platform, unlimited possibilities. Connect suppliers, channels, logistics, payments, and AI - all working together automatically.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
