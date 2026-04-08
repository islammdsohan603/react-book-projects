import React from 'react';
import banner from '../../assets/hero_img.jpg';

const Banner = () => {
  return (
    <div className="bg-[#F9FAFB] pt-20">
      <div className="w-10/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A] leading-tight">
              Discover Your Next Favorite Book
            </h1>

            <p className="text-[#6B7280] text-lg">
              Explore our curated collection of books and find your next great
              read. Fiction, non-fiction, and everything in between.
            </p>

            {/* Buttons */}
            <div className="flex gap-4">
              <button className="bg-[#2563EB] text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
                Browse Books
              </button>

              <button className="border border-gray-300 px-6 py-3 rounded-lg text-[#111827] hover:bg-gray-100 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div>
            <img src={banner} alt="Books" className="rounded-2xl shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
