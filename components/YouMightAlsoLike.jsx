'use client'
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { FaStar, FaMapMarkerAlt, FaHeart, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { useRouter } from "next/navigation";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const YouMightAlsoLike = () => {
  const router = useRouter();
  const [hoveredProperty, setHoveredProperty] = useState(null);

  const properties = [
    {
      id: 1,
      title: "Marmaris Resort",
      location: "Marmaris, Turkey",
      currentPrice: 420,
      originalPrice: 560,
      rating: 4.8,
      reviews: 245,
      roomsLeft: 2,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
      isTrending: true,
      saveAmount: 70
    },
    {
      id: 2,
      title: "Grand Hotel",
      location: "Istanbul, Turkey",
      currentPrice: 380,
      originalPrice: 480,
      rating: 4.6,
      reviews: 189,
      roomsLeft: 5,
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
      isTrending: false,
      saveAmount: 100
    },
    {
      id: 3,
      title: "Coastal Paradise",
      location: "Antalya, Turkey",
      currentPrice: 450,
      originalPrice: 600,
      rating: 4.9,
      reviews: 312,
      roomsLeft: 1,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
      isTrending: true,
      saveAmount: 150
    },
    {
      id: 4,
      title: "Modern Suites",
      location: "Bodrum, Turkey",
      currentPrice: 520,
      originalPrice: 650,
      rating: 4.7,
      reviews: 156,
      roomsLeft: 3,
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
      isTrending: false,
      saveAmount: 130
    },
    {
      id: 5,
      title: "Luxury Resort",
      location: "Kusadasi, Turkey",
      currentPrice: 480,
      originalPrice: 620,
      rating: 4.8,
      reviews: 278,
      roomsLeft: 4,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
      isTrending: true,
      saveAmount: 140
    },
    {
      id: 6,
      title: "Historic Hotel",
      location: "Cappadocia, Turkey",
      currentPrice: 350,
      originalPrice: 450,
      rating: 4.5,
      reviews: 203,
      roomsLeft: 6,
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
      isTrending: false,
      saveAmount: 100
    },
    {
      id: 7,
      title: "Seaside Villa",
      location: "Fethiye, Turkey",
      currentPrice: 600,
      originalPrice: 750,
      rating: 4.9,
      reviews: 145,
      roomsLeft: 2,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
      isTrending: true,
      saveAmount: 150
    },
    {
      id: 8,
      title: "Urban Retreat",
      location: "Ankara, Turkey",
      currentPrice: 320,
      originalPrice: 420,
      rating: 4.4,
      reviews: 167,
      roomsLeft: 8,
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
      isTrending: false,
      saveAmount: 100
    }
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-montserrat-bold text-2xl md:text-3xl text-gray-900">
            You might also like
          </h2>
        </div>

        {/* Swiper Carousel */}
        <div className="relative pb-16">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              nextEl: '.custom-next-button',
              prevEl: '.custom-prev-button',
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            className="property-swiper"
        loop={true}
          >
            {properties.map((property) => (
              <SwiperSlide key={property.id}>
                <div className="bg-white rounded-3xl p-2 shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  {/* Image Section */}
                  <div className="relative sm:h-56 h-48 overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover rounded-3xl"
                    />
                    
                    {/* Trending Badge */}
                    {property.isTrending && (
                      <div className="absolute top-3 left-3">
                        <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                          Trending
                        </span>
                      </div>
                    )}

                    {/* Save Badge */}
                    <div className="absolute bottom-3 left-3">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Save ${property.saveAmount}
                      </span>
                    </div>

                    {/* Location Icon */}
                    <div className="absolute top-3 right-3">
                      <div 
                        className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors cursor-pointer relative"
                        onMouseEnter={() => setHoveredProperty(property.id)}
                        onMouseLeave={() => setHoveredProperty(null)}
                      >
                        <FaMapMarkerAlt className="w-4 h-4 text-blue-500" />
                        
                        {/* Location Tooltip */}
                        {hoveredProperty === property.id && (
                          <div className="absolute top-10 right-0 bg-gray-900 text-white text-xs rounded-lg p-3 w-56 z-50 shadow-lg">
                            <div className="space-y-2">
                              <h4 className="font-semibold text-sm">Location Details</h4>
                              <p className="text-gray-200">📍 {property.location}</p>
                              <p className="text-gray-200">• 5 min walk to city center</p>
                              <p className="text-gray-200">• 10 min drive to airport</p>
                              <p className="text-gray-200">• Near public transport</p>
                              <p className="text-gray-200">• Beach access available</p>
                              <p className="text-gray-200">• Shopping district nearby</p>
                            </div>
                            {/* Arrow */}
                            <div className="absolute -top-1 right-3 w-2 h-2 bg-gray-900 transform rotate-45"></div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-2">
                    {/* Title and Rating */}
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-poppins-semibold text-lg text-gray-900 flex-1">
                        {property.title}
                      </h3>
                      <div className="flex items-center ml-2">
                        <FaStar className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="text-sm text-gray-600">
                          ({property.reviews} reviews)
                        </span>
                      </div>
                    </div>

                    {/* Location */}
                    <p className="text-gray-600 text-sm mb-3">
                      {property.location}
                    </p>

                    {/* Price Section */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-baseline">
                        <span className="font-poppins-bold text-2xl text-gray-900">
                          ${property.currentPrice}
                        </span>
                        <span className="text-sm text-gray-500 line-through ml-2">
                          ${property.originalPrice}
                        </span>
                        <span className="text-sm text-gray-500 ml-1">/night</span>
                      </div>
                    </div>

                    {/* Availability */}
                    <div className="flex items-center mb-4">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-green-600 text-sm font-medium">
                        {property.roomsLeft} rooms left
                      </span>
                    </div>

                  

                    {/* Action Buttons */}
                    <div className="flex items-center space-x-3">
                      <button className="flex-1 bg-blue-900 text-white py-2 px-4 rounded-full font-poppins-medium hover:bg-blue-700 transition-colors cursor-pointer" onClick={()=>router.push('/book-now')}>
                        Book now
                      </button>
                      <button className="w-10 h-10 bg-gray-200 border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
                        <FaHeart className="w-4 h-4 text-black" />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Button */}
          <button className="custom-next-button absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
            <FaChevronRight className="w-4 h-4 text-gray-600" />
          </button>
          
          {/* Custom Previous Button */}
          <button className="custom-prev-button absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
            <FaChevronLeft className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default YouMightAlsoLike;
