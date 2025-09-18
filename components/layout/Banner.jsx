import React from 'react';

const Banner = () => {
  return (
    <div className="w-full bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Side - Brand Name */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold text-blue-900 font-monteserrat">
              Top Tier Travel
            </h1>
          </div>

          {/* Right Side - Tagline */}
          <div className="">
            <p className="text-lg text-gray-600 font-montserrat leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Unlock extraordinary stays with our expert-curated hotels and<br className="hidden sm:block" />
              exclusive access to the world's finest destinations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
