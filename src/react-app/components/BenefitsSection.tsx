import { TrendingUp, Users, Zap, Globe, Shield, CircleCheck } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: "Multiply Revenue Streams",
    description: "Transform your single Shopify store into a multi-channel revenue powerhouse"
  },
  {
    icon: Users,
    title: "Add a Reseller Channel",
    description: "Easily invite and sync selected products from your Shopify with resellers. Orders flow back that you can fulfill or mark as sold "
  },
  {
    icon: Zap,
    title: "Automated Operations",
    description: "Zero manual work - selected products from your product catalog, inventory, prices and orders sync automatically"
  },
  {
    icon: Globe,
    title: "Global Market Reach",
    description: "Expand to new markets through regional influencer and reseller stores"
  },
  {
    icon: Shield,
    title: "Transparent Pricing",
    description: "Start with an annual once a year payment for the integration service - no hidden fees or surprises"
  },
  {
    icon: CircleCheck,
    title: "Complete Visibility",
    description: "Real-time analytics and insights across all channels, suppliers, and revenue streams"
  }
];

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-white" aria-labelledby="benefits-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 id="benefits-heading" className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The Results You'll Get
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stop leaving money on the table. Avetti Channel Connect transforms your Shopify business into a scalable, multi-channel empire.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
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
