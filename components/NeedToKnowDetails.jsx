'use client'
import React from 'react';
import { 
  FaClock, 
  FaMapMarkerAlt, 
  FaWifi, 
  FaStar, 
  FaCat, 
  FaTimes,
  FaChevronRight 
} from 'react-icons/fa';

const NeedToKnowDetails = () => {
  const details = [
    {
      id: 1,
      icon: FaClock,
      title: "Check-in / Check-out",
      description: "Check-in from 3:00 PM | Check-out by 11:00 AM"
    },
    {
      id: 2,
      icon: FaMapMarkerAlt,
      title: "Location & Parking",
      description: "Conveniently located in Marlow-on-Thames with free on-site parking."
    },
    {
      id: 3,
      icon: FaWifi,
      title: "Wi-Fi",
      description: "Complimentary high-speed Wi-Fi available throughout the property."
    },
    {
      id: 4,
      icon: FaStar,
      title: "Spa & Fitness Hours",
      description: "Open daily from 7:00 AM to 9:00 PM — bookings recommended."
    },
    {
      id: 5,
      icon: FaCat,
      title: "Pet Policy",
      description: "Unfortunately, pets are not allowed at this property."
    },
    {
      id: 6,
      icon: FaTimes,
      title: "Cancellation Policy",
      description: "Free cancellation up to 48 hours before arrival."
    }
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-xl font-bold mb-6">
          Need-to-Know Details
        </h2>

        {/* Details Cards */}
        <div className="space-y-4">
          {details.map((detail) => {
            const IconComponent = detail.icon;
            return (
              <div
                key={detail.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  {/* Left side - Icon and Content */}
                  <div className="flex items-center space-x-4 flex-1">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-gray-600" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-monteserrat text-lg font-semibold mb-1">
                        {detail.title}
                      </h3>
                      <p className="text-base text-gray-600 leading-relaxed">
                        {detail.description}
                      </p>
                    </div>
                  </div>

                  {/* Right side - Chevron */}
                  <div className="ml-4 flex-shrink-0">
                    <FaChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NeedToKnowDetails;
