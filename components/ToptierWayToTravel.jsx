'use client'
import React from 'react';

const ToptierWayToTravel = () => {
  const experiences = [
    {
      id: 1,
      title: "Stay in a Historic Skyline Studio",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop&auto=format",
      description: "Experience luxury in our beautifully designed studio with panoramic city views"
    },
    {
      id: 2,
      title: "Sunset Moments on the Rooftop",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop&auto=format",
      description: "Unwind with breathtaking sunset views from our exclusive rooftop terrace"
    },
    {
      id: 3,
      title: "Welcome Glass of Sparkling Wine",
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=400&h=300&fit=crop&auto=format",
      description: "Start your stay with a complimentary glass of premium sparkling wine"
    },
    {
      id: 4,
      title: "Gourmet Breakfast with a View",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop&auto=format",
      description: "Indulge in our signature breakfast spread with stunning panoramic views"
    },
    {
      id: 5,
      title: "Wellness & Rejuvenation at the Spa",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&auto=format",
      description: "Relax and rejuvenate with our world-class spa treatments and wellness services"
    }
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="font-montserrat-bold text-2xl md:text-3xl text-gray-900 mb-6 ">
          The Toptier Way to Travel
        </h2>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className={` rounded-lg  overflow-hidden hover:shadow-lg transition-shadow duration-300 ${
                index === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-full rounded-b-lg object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content Section */}
              <div className="mt-4">
                <h3 className="font-poppins font-medium text-lg text-gray-900 leading-tight">
                  {experience.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Row for Mobile - Show 5th card separately on mobile */}
        <div className="grid grid-cols-1 sm:hidden gap-6 mt-6">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
            {/* Image Section */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={experiences[4].image}
                alt={experiences[4].title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300"></div>
            </div>

            {/* Content Section */}
            <div className="p-6">
              <h3 className="font-poppins-semibold text-lg text-gray-900 leading-tight">
                {experiences[4].title}
              </h3>
              <p className="font-poppins-regular text-gray-600 text-sm mt-2 leading-relaxed">
                {experiences[4].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToptierWayToTravel;
