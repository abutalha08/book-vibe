import React from "react";
import { FaRegStar } from "react-icons/fa";

const BookCard = ({ book }) => {
  const { image, bookName, author, category, rating, tags } = book;

  return (
    <div className=" rounded-2xl p-4 sm:p-5 bg-white shadow-sm 
    hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">

      {/* Image Section */}
      <div className="bg-gray-100 rounded-xl flex justify-center items-center h-48 sm:h-56 mb-4">
        <img
          src={image}
          alt={bookName}
          className="h-32 sm:h-40 object-contain"
        />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-3">
        {tags?.map((tag, index) => (
          <span
            key={index}
            className="bg-green-100 text-[#23BE0A] text-xs sm:text-sm px-3 py-1 rounded-full font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-1">
        {bookName}
      </h2>

      {/* Author */}
      <p className="text-sm text-gray-500 mb-3">
        By : {author}
      </p>

      {/* Divider */}
      <div className="border-t border-dashed my-3"></div>

      {/* Bottom Section */}
      <div className="flex justify-between items-center text-sm sm:text-base text-gray-600">
        <span>{category}</span>

        <div className="flex items-center gap-1">
          <span>{rating}</span>
          <FaRegStar className="text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default BookCard;