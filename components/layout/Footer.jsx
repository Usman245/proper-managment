'use client'
import React, { useState, useEffect, useRef } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const languageRef = useRef(null);
  const currencyRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setIsLanguageOpen(false);
      }
      if (currencyRef.current && !currencyRef.current.contains(event.target)) {
        setIsCurrencyOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Spanish', flag: '🇪🇸' },
    { code: 'fr', name: 'French', flag: '🇫🇷' },
    { code: 'de', name: 'German', flag: '🇩🇪' },
    { code: 'it', name: 'Italian', flag: '🇮🇹' },
    { code: 'pt', name: 'Portuguese', flag: '🇵🇹' },
    { code: 'ja', name: 'Japanese', flag: '🇯🇵' },
    { code: 'ko', name: 'Korean', flag: '🇰🇷' },
    { code: 'zh', name: 'Chinese', flag: '🇨🇳' },
    { code: 'ar', name: 'Arabic', flag: '🇸🇦' }
  ];

  const currencies = [
    { code: 'USD', name: 'US Dollar', symbol: '$' },
    { code: 'EUR', name: 'Euro', symbol: '€' },
    { code: 'GBP', name: 'British Pound', symbol: '£' },
    { code: 'JPY', name: 'Japanese Yen', symbol: '¥' },
    { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$' },
    { code: 'AUD', name: 'Australian Dollar', symbol: 'A$' },
    { code: 'CHF', name: 'Swiss Franc', symbol: 'CHF' },
    { code: 'CNY', name: 'Chinese Yuan', symbol: '¥' },
    { code: 'INR', name: 'Indian Rupee', symbol: '₹' },
    { code: 'BRL', name: 'Brazilian Real', symbol: 'R$' }
  ];

  return (
    <footer className="bg-white">
      {/* Upper Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Explore Column */}
          <div>
            <h3 className="font-montserrat-semibold text-lg text-gray-900 mb-4">Explore</h3>
            <ul className="space-y-3">
              <li><a href="#" className="font-montserrat-regular text-gray-600 hover:text-gray-900 transition-colors text-sm font-poppins">Featured Hotels</a></li>
              <li><a href="#" className="font-montserrat-regular text-gray-600 hover:text-gray-900 transition-colors text-sm font-poppins">Popular Destinations</a></li>
              <li><a href="#" className="font-montserrat-regular text-gray-600 hover:text-gray-900 transition-colors text-sm font-poppins">Travel Guides</a></li>
              <li><a href="#" className="font-montserrat-regular text-gray-600 hover:text-gray-900 transition-colors text-sm font-poppins">Special Offers</a></li>
              <li><a href="#" className="font-montserrat-regular text-gray-600 hover:text-gray-900 transition-colors text-sm font-poppins">Blog</a></li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="font-montserrat-semibold text-lg text-gray-900 mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="font-montserrat-regular text-gray-600 hover:text-gray-900 transition-colors text-sm font-poppins">Contact Us</a></li>
              <li><a href="#" className="font-montserrat-regular text-gray-600 hover:text-gray-900 transition-colors text-sm font-poppins">Help Center</a></li>
              <li><a href="#" className="font-montserrat-regular text-gray-600 hover:text-gray-900 transition-colors text-sm font-poppins">FAQs</a></li>
              <li><a href="#" className="font-montserrat-regular text-gray-600 hover:text-gray-900 transition-colors text-sm font-poppins">Booking Policies</a></li>
              <li><a href="#" className="font-montserrat-regular text-gray-600 hover:text-gray-900 transition-colors text-sm font-poppins">Cancellation</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-montserrat-semibold text-lg text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="font-montserrat-regular text-gray-600 hover:text-gray-900 transition-colors text-sm font-poppins">About Us</a></li>
              <li><a href="#" className="font-montserrat-regular text-gray-600 hover:text-gray-900 transition-colors text-sm font-poppins">Careers</a></li>
              <li><a href="#" className="font-montserrat-regular text-gray-600 hover:text-gray-900 transition-colors text-sm font-poppins">Partners</a></li>
              <li><a href="#" className="font-montserrat-regular text-gray-600 hover:text-gray-900 transition-colors text-sm font-poppins">Privacy Policy</a></li>
              <li><a href="#" className="font-montserrat-regular text-gray-600 hover:text-gray-900 transition-colors text-sm font-poppins">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Downloads Column */}
          <div>
            <h3 className="font-montserrat-semibold text-lg text-gray-900 mb-4">Downloads</h3>
            <ul className="space-y-3">
              <li><a href="#" className="font-montserrat-regular text-gray-600 hover:text-gray-900 transition-colors text-sm font-poppins">iOS</a></li>
              <li><a href="#" className="font-montserrat-regular text-gray-600 hover:text-gray-900 transition-colors text-sm font-poppins">Android</a></li>
              <li><a href="#" className="font-montserrat-regular text-gray-600 hover:text-gray-900 transition-colors text-sm font-poppins">Mac</a></li>
              <li><a href="#" className="font-montserrat-regular text-gray-600 hover:text-gray-900 transition-colors text-sm font-poppins">Windows</a></li>
              <li><a href="#" className="font-montserrat-regular text-gray-600 hover:text-gray-900 transition-colors text-sm font-poppins">Chrome</a></li>
            </ul>
          </div>

          {/* Stay Connected Column */}
          <div>
            <h3 className="font-montserrat-semibold text-lg text-gray-900 mb-4">Stay Connected</h3>
            <p className="font-montserrat-regular text-gray-600 mb-6 leading-relaxed text-sm">
              Subscribe to get travel tips, exclusive deals, and the latest updates.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-3xl shadow-xl font-montserrat-regular text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent"
              />
              <button className=" bg-blue-900 text-white py-2 px-4 text-base rounded-3xl font-montserrat-medium  transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-200"></div>

      {/* Lower Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="font-montserrat-regular text-gray-600 text-base">
            © 2025 PHPTARVELS All rights reserved.
          </div>

          {/* Language and Currency Selectors */}
          <div className="flex items-center space-x-6">
            {/* Language Dropdown */}
            <div className="relative" ref={languageRef}>
              <button
                onClick={() => {
                  setIsLanguageOpen(!isLanguageOpen);
                  setIsCurrencyOpen(false);
                }}
                className="flex items-center space-x-1 hover:text-gray-900 transition-colors"
              >
                <span className="font-montserrat-regular text-gray-600">{selectedLanguage}</span>
                <svg 
                  className={`w-4 h-4 text-gray-600 transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isLanguageOpen && (
                <div className="absolute bottom-full mb-2 left-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-48">
                  <div className="py-2 max-h-60 overflow-y-auto">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => {
                          setSelectedLanguage(language.name);
                          setIsLanguageOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center space-x-3 ${
                          selectedLanguage === language.name ? 'bg-blue-50 text-blue-900' : 'text-gray-700'
                        }`}
                      >
                        <span className="text-lg">{language.flag}</span>
                        <span className="font-montserrat-regular text-sm">{language.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Currency Dropdown */}
            <div className="relative" ref={currencyRef}>
              <button
                onClick={() => {
                  setIsCurrencyOpen(!isCurrencyOpen);
                  setIsLanguageOpen(false);
                }}
                className="flex items-center space-x-1 hover:text-gray-900 transition-colors"
              >
                <span className="font-montserrat-regular text-gray-600">{selectedCurrency}</span>
                <svg 
                  className={`w-4 h-4 text-gray-600 transition-transform ${isCurrencyOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isCurrencyOpen && (
                <div className="absolute bottom-full mb-2 left-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-48">
                  <div className="py-2 max-h-60 overflow-y-auto">
                    {currencies.map((currency) => (
                      <button
                        key={currency.code}
                        onClick={() => {
                          setSelectedCurrency(currency.code);
                          setIsCurrencyOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors flex items-center justify-between ${
                          selectedCurrency === currency.code ? 'bg-blue-50 text-blue-900' : 'text-gray-700'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="font-montserrat-regular text-sm">{currency.code}</span>
                          <span className="font-montserrat-regular text-sm text-gray-500">{currency.name}</span>
                        </div>
                        <span className="font-montserrat-regular text-sm">{currency.symbol}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            <a href="#" className="text-blue-900 hover:text-blue-700 transition-colors">
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a href="#" className="text-blue-900 hover:text-blue-700 transition-colors">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-blue-900 hover:text-blue-700 transition-colors">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-blue-900 hover:text-blue-700 transition-colors">
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a href="#" className="text-blue-900 hover:text-blue-700 transition-colors">
              <FaYoutube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
