import React from 'react';
import ReviewCard from './ReviewCard';
import Link from 'next/link';

const Reviews = () => {
  const reviews = [
    { name: 'David', date: '09/03/25', rating: 9.6, reviewText: 'The price was a little steep, but the stay was otherwise flawless.' },
    { name: 'Hamza Ali', date: '09/03/25', rating: 8.8, reviewText: 'The price was a little steep, but the stay was otherwise flawless.' },
    { name: 'Emily', date: '09/03/25', rating: 10, reviewText: 'The price was a little steep, but the stay was otherwise flawless.' },
  ];

  // Calculate overall rating
  const overallRating = (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1);
  const totalReviews = reviews.length * 3; // Show 9 reviews total (3x3 grid)

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Reviews Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-montserrat-bold text-2xl md:text-3xl text-gray-900 mb-6">
            Reviews
          </h2>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="font-montserrat-bold text-2xl md:text-3xl text-gray-900">★ {overallRating}</span>
              <span className="font-poppins-regular text-gray-600">({totalReviews} reviews)</span>
            </div>
            <Link href='/reviews' className="font-poppins-medium text-blue-600 hover:text-blue-700 transition-colors">
              See reviews
            </Link>
          </div>
        </div>

        {/* Reviews Grid - 3x3 layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Repeat the 3 reviews to create 9 total cards */}
          {[...reviews, ...reviews, ...reviews].map((review, index) => (
            <ReviewCard
              key={index}
              name={review.name}
              date={review.date}
              rating={review.rating}
              reviewText={review.reviewText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
