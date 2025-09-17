// components/PropertyCard.jsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaStar, FaWifi, FaSwimmer, FaUtensils, FaBriefcase, FaUmbrellaBeach, FaDumbbell, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { IoCalendarClearOutline, IoLocationOutline, IoSearch } from "react-icons/io5";
import { MdOutlinePerson } from "react-icons/md";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function PropertyCard() {
  return (
    <div className="w-full bg-gray-50 p-4 md:p-8 rounded-lg shadow-sm">
        <div className="max-w-7xl mx-auto">
      {/* Search Bar */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-6">
        {/* Destination */}
        <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2 bg-white">
          <IoLocationOutline className="text-gray-500" />
          <input
            type="text"
            placeholder="Search destinations..."
            className="outline-none flex-1 text-sm"
          />
        </div>

        {/* Check-in */}
        <div className="flex items-center gap-2 border border-gray-300 rounded-xl px-3 py-2 bg-white">
          <IoCalendarClearOutline className="text-gray-500" />
          <input type="date" className="outline-none flex-1 text-sm" />
        </div>

        {/* Check-out */}
        <div className="flex items-center gap-2 border border-gray-300 rounded-xl px-3 py-2 bg-white">
          <IoCalendarClearOutline className="text-gray-500" />
          <input type="date" className="outline-none flex-1 text-sm" />
        </div>

        {/* Guests */}
        <div className="flex items-center gap-2 border border-gray-300 rounded-xl px-3 py-2 bg-white">
          <MdOutlinePerson className="text-gray-500" />
          <select className="outline-none flex-1 text-sm">
            <option>2 Guests, 1 Room</option>
            <option>3 Guests, 2 Rooms</option>
          </select>
        </div>

        {/* Search button */}
        <button className="bg-blue-900 text-white flex items-center justify-center rounded-xl px-4 py-2 gap-2">
          <IoSearch />
          Search Homes
        </button>
      </div>

      {/* Image Slider */}
      <div className="relative mb-6">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.custom-next-button',
            prevEl: '.custom-prev-button',
          }}
          spaceBetween={15}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
          }}
          className="property-swiper"
        >
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
            alt="Resort"
            className="rounded-2xl object-cover w-full h-72"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1732347210962-c37cb67aabb2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdGVsJTIwZnJvbnQlMjBwaWN8ZW58MHx8MHx8fDA%3D"
            alt="Hotel"
            className="rounded-2xl object-cover w-full h-72"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
            alt="Pool"
            className="rounded-lg object-cover w-full h-72"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
            alt="Resort"
            className="rounded-2xl object-cover w-full h-72"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1732347210962-c37cb67aabb2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdGVsJTIwZnJvbnQlMjBwaWN8ZW58MHx8MHx8fDA%3D"
            alt="Hotel"
            className="rounded-2xl object-cover w-full h-72"
          />
        </SwiperSlide>
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button className="custom-prev-button absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
          <FaChevronLeft className="w-4 h-4 text-gray-600" />
        </button>
        <button className="custom-next-button absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
          <FaChevronRight className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      {/* Property Details */}
      <div className="flex flex-col md:flex-row justify-between md:gap-10 gap-6 mt-6">
        {/* Left section */}
        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-900">
            The Serene Vista Manor & Spa
          </h2>
          <div className="flex items-center text-sm text-gray-600 gap-2 mt-1">
            <FaStar className="text-yellow-500" />
            <span>5.0</span>
            <span>• (10)</span>
            <span>517 Lexington Avenue, New York, NY, 10017</span>
            <span>• 101Km</span>
            <a href="#" className="text-blue-700 underline">Map</a>
          </div>
          <p className="mt-3 text-gray-600 text-sm leading-6">
            A peaceful boutique escape in Midtown Manhattan, just steps from Grand Central. 
            Enjoy elegant rooms with city views, a full-service spa, and easy access to NYC's top attractions —
            perfect for both relaxation and exploration.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-lg">Top Rated</span>
            <span className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-lg">Free Cancellation</span>
            <span className="bg-purple-100 text-purple-700 text-sm font-medium px-3 py-1 rounded-lg">Best Price Guarantee</span>
          </div>
        </div>

        {/* Right section - Amenities */}
        <div className="md:w-1/3">
          <h3 className="font-bold text-gray-900 mb-3">About this Property</h3>
          <ul className="grid grid-cols-2 sm:gap-8 gap-4 text-sm text-gray-700">
            <li className="flex items-center gap-2 ">
                <div className="rounded-lg p-1.5 bg-green-100"><FaWifi className="" /></div> Wi-Fi</li>
            <li className="flex items-center gap-2">
            <div className="rounded-lg p-1.5 bg-green-100"><FaSwimmer className="" /></div> Pool</li>
            <li className="flex items-center gap-2">
            <div className="rounded-lg p-1.5 bg-green-100"><FaUtensils className="" /></div> Restaurant</li>
            <li className="flex items-center gap-2">
            <div className="rounded-lg p-1.5 bg-green-100"><FaUmbrellaBeach className="" /></div> Beach Access</li>
            <li className="flex items-center gap-2">
            <div className="rounded-lg p-1.5 bg-green-100"><FaBriefcase className="" /></div> Business Center</li>
            <li className="flex items-center gap-2">
            <div className="rounded-lg p-1.5 bg-green-100"><FaDumbbell className="" /></div> Gym</li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
}
