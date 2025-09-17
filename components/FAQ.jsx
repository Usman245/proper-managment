'use client'
import React, { useState } from 'react';
import { FaArrowDown, FaChevronDown } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "What time is check-in and check-out?",
      answer: "Check-in time is 3:00 PM and check-out time is 11:00 AM. Early check-in and late check-out may be available upon request, subject to availability and additional charges."
    },
    {
      id: 2,
      question: "Is breakfast included in the room rate?",
      answer: "Yes, a complimentary continental breakfast is included in all room rates. Our breakfast is served daily from 6:30 AM to 10:00 AM in the main dining area."
    },
    {
      id: 3,
      question: "Does the hotel offer free Wi-Fi?",
      answer: "Absolutely! We provide complimentary high-speed Wi-Fi throughout the entire hotel, including all guest rooms, common areas, and meeting spaces."
    },
    {
      id: 4,
      question: "Is there parking available at the hotel?",
      answer: "Yes, we offer both valet parking and self-parking options. Valet parking is available for $25 per night, while self-parking is complimentary for all hotel guests."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-xl font-bold mb-6">
          Frequently asked questions
        </h2>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              {/* Question Row */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none  focus:ring-inset"
              >
                <h3 className="font-poppins-regular text-base font-semibold pr-4">
                  {faq.question}
                </h3>
                <div
                  className={`w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  <FaArrowDown className="w-4 h-4 text-white" />
                </div>
              </button>

              {/* Answer Section */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="font-poppins-regular text-sm text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
