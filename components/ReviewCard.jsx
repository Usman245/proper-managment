import React from 'react';

const ReviewCard = ({ name, date, rating, reviewText }) => {
  // Generate avatar images based on names
  const getAvatarImage = (name) => {
    const avatarMap = {
      'David': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      'Hamza Ali': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      'Emily': 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    };
    return avatarMap[name] || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-300">
      {/* Top Section - Avatar, Name, and Rating */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          {/* Avatar */}
          <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
            <img
              src={getAvatarImage(name)}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Name and Date */}
          <div>
            <h3 className="font-poppins-semibold text-lg text-gray-900">{name}</h3>
            <p className="font-poppins-regular text-sm text-gray-500">Toptier from {date}</p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-1">
          <span className="text-gray-900">★</span>
          <span className="font-poppins-semibold text-lg text-gray-900">{rating}</span>
        </div>
      </div>

      {/* Review Text */}
      <p className="font-poppins-regular text-gray-700 leading-relaxed">
        {reviewText}
      </p>
    </div>
  );
};

export default ReviewCard;
