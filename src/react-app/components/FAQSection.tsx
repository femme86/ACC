import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How quickly can I get started with Channel Connect?",
    answer: "Choose the package to determine the level of Channel Connect to start with. Then email or provide your suppliers and resellers with an onboarding link which makes it easy."
  },
  {
    question: "What integrations are included?",
    answer: "Channel Connect includes comprehensive integrations with Shopify/Shopify Plus, Stripe for payments, Sendcloud & Easyship (coming soon), N8N workflow you can modify using  AI tools like OpenAI, Claude, Gemini, and Grok."
  },
  {
    question: "How do you verify suppliers and resellers?",
    answer: "All suppliers and resellers go through our rigorous verification process including business license validation, product quality checks, and performance history reviews. We only work with established, reliable partners to protect your brand."
  },
  {
    question: "Can I control which products are sold through which channels?",
    answer: "Absolutely. You have full control over product visibility, pricing, and availability across different sales channels. Set custom rules for each supplier and reseller to optimize your margins and brand positioning."
  },
  {
    question: "How does payment splitting work?",
    answer: "Our integration to Stripe system automatically splits payments from Buyers ordering on your B2B store and B2C marketplaces between you, the supplier or brand and the processing fees.    Orders coming in are separated and routed to each supplier."
  },
  {
    question: "Is my data secure?",
    answer: "Yes. We use enterprise-grade security with end-to-end encryption, SOC 2 Type II compliance, and follow strict data privacy protocols. Your business data and customer information are completely secure and never shared without permission."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 id="faq-heading" className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about getting started with Channel Connect
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-inset"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6" id={`faq-answer-${index}`}>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-blue-600 hover:text-blue-700 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 rounded"
          >
            Contact our team for personalized answers
          </button>
        </div>
      </div>
    </section>
  );
}
