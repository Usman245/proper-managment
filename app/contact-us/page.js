"use client";

import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane, FaUser, FaComment } from 'react-icons/fa';
import { IoCallOutline, IoMailOutline, IoLocationOutline, IoTimeOutline } from 'react-icons/io5';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
  Get in touch with our team. We&apos;re here to help you plan your perfect travel experience.
</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Have questions about our services or need help planning your next trip? 
                Our dedicated team is here to assist you every step of the way.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <IoCallOutline className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600 mb-2">Call us for immediate assistance</p>
                    <a href="tel:+1234567890" className="text-blue-900 font-medium hover:underline">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <IoMailOutline className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600 mb-2">Send us an email anytime</p>
                    <a href="mailto:info@toptiertravel.com" className="text-blue-900 font-medium hover:underline">
                      info@toptiertravel.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <IoLocationOutline className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office</h3>
                    <p className="text-gray-600 mb-2">Visit our headquarters</p>
                    <p className="text-gray-700">
                      123 Travel Street<br />
                      New York, NY 10001<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <IoTimeOutline className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600 mb-2">We&apos;re here to help</p>
                    <div className="text-gray-700 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaPhone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="booking">Booking Support</option>
                  <option value="cancellation">Cancellation Request</option>
                  <option value="complaint">Complaint</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <FaComment className="h-5 w-5 text-gray-400" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-800 transition duration-200 flex items-center justify-center gap-2"
              >
                <FaPaperPlane className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">Quick answers to common questions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">How do I make a reservation?</h3>
              <p className="text-gray-600">
                You can make a reservation through our website, by calling our customer service team, 
                or by visiting our office. We recommend booking in advance for the best rates.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">What is your cancellation policy?</h3>
              <p className="text-gray-600">
                We offer flexible cancellation policies. Most bookings can be cancelled up to 24 hours 
                before check-in for a full refund. Some special rates may have different terms.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Do you offer group discounts?</h3>
              <p className="text-gray-600">
                Yes! We offer special rates for groups of 10 or more. Contact our group sales team 
                for customized packages and exclusive deals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">How can I modify my booking?</h3>
              <p className="text-gray-600">
                You can modify your booking through your account dashboard, by calling customer service, 
                or by replying to your confirmation email. Changes are subject to availability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;