import React from 'react';

export const FAQ = () => {
  const faqs = [
    {
      question: "What makes Kinky Curly products different?",
      answer: "Our products are specially formulated with natural ingredients that work together to enhance and define your natural curl pattern while providing lasting moisture and hold."
    },
    {
      question: "Are your products suitable for all curl types?",
      answer: "Yes! Our products are designed to work with all curl patterns from wavy to coily (2A-4C). The key is adjusting the amount of product based on your hair's porosity and density."
    },

    {
      question: "How often should I use these products?",
      answer: "This varies by product and your hair's needs. Our cleansers can be used weekly, while leave-in products can be applied as needed for moisture maintenance."
    },
    {
      question: "Can I use multiple Kinky Curly products together?",
      answer: "Absolutely! Our products are designed to work synergistically. We recommend following our suggested layering routine for best results."
    },
    // {
    //   question: "Is this product safe for color-treated hair?",
    //   answer: "Yes, it is formulated to be gentle and safe for color-treated or chemically processed hair."
    // }
  ];

  return (
    <div id="faq" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <p className="mt-4 text-gray-600">Everything you need to know about our products</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-rose-50 rounded-lg p-8 transition-transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};