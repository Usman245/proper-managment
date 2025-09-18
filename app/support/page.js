"use client";

import { useState } from 'react';
import { FaSearch, FaQuestionCircle, FaTicketAlt, FaPhone, FaEnvelope, FaClock, FaChevronDown, FaChevronUp, FaBook, FaHeadset, FaComments, FaFileAlt } from 'react-icons/fa';
import { IoSearchOutline, IoHelpCircleOutline, IoChatbubbleOutline, IoCallOutline, IoMailOutline } from 'react-icons/io5';

const Support = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [ticketForm, setTicketForm] = useState({
    name: '',
    email: '',
    subject: '',
    priority: 'medium',
    category: 'general',
    message: ''
  });

  const categories = [
    { id: 'all', name: 'All Topics', icon: FaBook },
    { id: 'booking', name: 'Booking & Reservations', icon: FaTicketAlt },
    { id: 'cancellation', name: 'Cancellations', icon: FaClock },
    { id: 'payment', name: 'Payment & Billing', icon: FaFileAlt },
    { id: 'technical', name: 'Technical Support', icon: FaHeadset },
    { id: 'account', name: 'Account Issues', icon: FaQuestionCircle }
  ];

  const faqs = [
    {
      id: 1,
      category: 'booking',
      question: 'How do I make a reservation?',
      answer: 'You can make a reservation through our website by selecting your destination, dates, and number of guests. Simply click "Search Homes" and choose from available properties. You can also call our customer service team at +1 (234) 567-890 for assistance.'
    },
    {
      id: 2,
      category: 'cancellation',
      question: 'What is your cancellation policy?',
      answer: 'We offer flexible cancellation policies. Most bookings can be cancelled up to 24 hours before check-in for a full refund. Some special rates and promotional offers may have different cancellation terms. Please check your booking confirmation for specific details.'
    },
    {
      id: 3,
      category: 'payment',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed securely through our encrypted payment system. You can also pay in installments for certain bookings.'
    },
    {
      id: 4,
      category: 'technical',
      question: 'I\'m having trouble logging into my account',
      answer: 'If you\'re having trouble logging in, try resetting your password using the "Forgot Password" link on the login page. Make sure you\'re using the correct email address. If the problem persists, contact our technical support team.'
    },
    {
      id: 5,
      category: 'booking',
      question: 'Can I modify my booking after confirmation?',
      answer: 'Yes, you can modify your booking through your account dashboard or by contacting customer service. Changes are subject to availability and may incur additional charges. Some promotional rates may not be eligible for modifications.'
    },
    {
      id: 6,
      category: 'account',
      question: 'How do I update my profile information?',
      answer: 'You can update your profile information by logging into your account and going to the "My Profile" section. From there, you can edit your personal details, contact information, and preferences.'
    }
  ];

  const filteredFAQs = faqs.filter(faq => 
    selectedCategory === 'all' || faq.category === selectedCategory
  ).filter(faq =>
    searchQuery === '' || 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTicketForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitTicket = (e) => {
    e.preventDefault();
    console.log('Support ticket submitted:', ticketForm);
    alert('Your support ticket has been submitted successfully! We will get back to you within 24 hours.');
    setTicketForm({
      name: '',
      email: '',
      subject: '',
      priority: 'medium',
      category: 'general',
      message: ''
    });
  };

  const toggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Support Center</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Find answers to your questions or get help from our support team
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Search and Quick Help */}
        <div className="mb-12">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How can we help you?</h2>
            
            {/* Search Bar */}
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <IoSearchOutline className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for help articles, FAQs, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
            </div>

            {/* Quick Help Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 hover:bg-blue-100 transition cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <IoHelpCircleOutline className="w-6 h-6 text-blue-900" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Browse FAQs</h3>
                </div>
                <p className="text-gray-600 text-sm">Find quick answers to common questions</p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border border-green-200 hover:bg-green-100 transition cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <IoChatbubbleOutline className="w-6 h-6 text-green-900" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Live Chat</h3>
                </div>
                <p className="text-gray-600 text-sm">Chat with our support team in real-time</p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 hover:bg-purple-100 transition cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <FaTicketAlt className="w-6 h-6 text-purple-900" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Submit Ticket</h3>
                </div>
                <p className="text-gray-600 text-sm">Create a support ticket for complex issues</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* FAQ Section */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              
              {/* Category Filter */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => {
                    const IconComponent = category.icon;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
                          selectedCategory === category.id
                            ? 'bg-blue-900 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        <IconComponent className="w-4 h-4" />
                        {category.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* FAQ List */}
              <div className="space-y-4">
                {filteredFAQs.map((faq) => (
                  <div key={faq.id} className="border border-gray-200 rounded-lg">
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition"
                    >
                      <span className="font-medium text-gray-900">{`${faq.question}`}</span>
                      {expandedFAQ === faq.id ? (
                        <FaChevronUp className="w-4 h-4 text-gray-500" />
                      ) : (
                        <FaChevronDown className="w-4 h-4 text-gray-500" />
                      )}
                    </button>
                    {expandedFAQ === faq.id && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-600 leading-relaxed">{`${faq.answer}`}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {filteredFAQs.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-500">No FAQs found matching your search criteria.</p>
                </div>
              )}
            </div>
          </div>

          {/* Contact Options */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Contact Support</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <IoCallOutline className="w-5 h-5 text-blue-900" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone Support</p>
                    <p className="text-sm text-gray-600">+1 (234) 567-890</p>
                    <p className="text-xs text-gray-500">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <IoMailOutline className="w-5 h-5 text-green-900" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email Support</p>
                    <p className="text-sm text-gray-600">support@toptiertravel.com</p>
                    <p className="text-xs text-gray-500">24/7 response</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <IoChatbubbleOutline className="w-5 h-5 text-purple-900" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Live Chat</p>
                    <p className="text-sm text-gray-600">Available now</p>
                    <p className="text-xs text-gray-500">Instant support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Ticket Form */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Submit Support Ticket</h3>
              
              <form onSubmit={handleSubmitTicket} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={ticketForm.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={ticketForm.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={ticketForm.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
                    placeholder="Brief description of your issue"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                  <select
                    name="priority"
                    value={ticketForm.priority}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select
                    name="category"
                    value={ticketForm.category}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
                  >
                    <option value="general">General</option>
                    <option value="booking">Booking</option>
                    <option value="cancellation">Cancellation</option>
                    <option value="payment">Payment</option>
                    <option value="technical">Technical</option>
                    <option value="account">Account</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                  <textarea
                    name="message"
                    value={ticketForm.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm resize-none"
                    placeholder="Describe your issue in detail..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-800 transition duration-200 flex items-center justify-center gap-2"
                >
                  <FaTicketAlt className="w-4 h-4" />
                  Submit Ticket
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;