import React, { useContext, useEffect, useState } from "react";
import { LibraryContext } from "../../Context/BookContext";
import { MdLocationOn } from "react-icons/md";
import { FaBookOpen, FaRegFileAlt, FaRegUser } from "react-icons/fa";
import { Link } from "react-router";

const ListedReadList = ({ sortingType }) => {
    const { readList } = useContext(LibraryContext);
    // console.log(readList);

    const [filteredReadList, setFilteredReadList] = useState([]);

    useEffect(() => {
        if (!readList) return;

        let updatedList = [...readList];

        if (sortingType === "pages") {
            updatedList.sort((a, b) => a.totalPages - b.totalPages);
        }
        else if (sortingType === "rating") {
            updatedList.sort((a, b) => a.rating - b.rating);
        }

        setFilteredReadList(updatedList);
    }, [sortingType, readList]);

    if (!filteredReadList || filteredReadList.length === 0) {
        return (
            <div className="flex items-center justify-center min-h-[70vh] px-4">
                <div
                    className="
        w-full max-w-md 
        text-center 
        bg-white 
        border border-gray-200 
        shadow-sm 
        rounded-2xl 
        p-6 md:p-10
      "
                >
                    {/* Icon */}
                    <div className="flex justify-center mb-4">
                        <FaBookOpen className="text-5xl text-gray-300" />
                    </div>

                    {/* Title */}
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                        Your Read List is Empty
                    </h2>

                    {/* Message */}
                    <p className="text-gray-500 text-sm md:text-base mt-2 leading-relaxed">
                        You haven’t added any books yet. Start exploring and add your
                        favorite books here.
                    </p>

                    {/* CTA Button */}
                    <Link
                        to="/"
                        className="
            mt-6
            inline-flex items-center justify-center  
            bg-indigo-600 hover:bg-indigo-700
            text-white
            px-6 py-2.5
            rounded-full
            text-sm md:text-base
            transition
            active:scale-95
            shadow-sm hover:shadow-md             
          "
                    >
                        Browse Books
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="space-y-3">
                {filteredReadList.map((book) => (
                    <div
                        key={book.bookId}
                        className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition mt-8 p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6 items-start"
                    >
                        {/* Image */}
                        <div className="w-full md:w-32 flex justify-center md:justify-start">
                            <img
                                src={book.image}
                                alt={book.bookName}
                                className="w-28 md:w-32 rounded-md object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex-1 w-full">
                            {/* Title */}
                            <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                                {book.bookName}
                            </h2>

                            {/* Author */}
                            <p className="text-sm text-gray-500 mt-1">By : {book.author}</p>

                            {/* Tags + Year */}
                            <div className="flex flex-wrap items-center gap-2 mt-3 text-sm">
                                <span className="text-gray-700 font-semibold">Tag</span>

                                {book.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs"
                                    >
                                        #{tag}
                                    </span>
                                ))}

                                <span className="flex items-center gap-1 text-gray-500 ml-2">
                                    <MdLocationOn className="text-lg text-gray-500" />
                                    Year of Publishing: {book.yearOfPublishing}
                                </span>
                            </div>

                            {/* Info */}
                            <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-500">
                                <span className="flex items-center gap-1">
                                    <FaRegUser className="text-gray-500" />
                                    Publisher: {book.publisher}
                                </span>

                                <span className="flex items-center gap-1">
                                    <FaRegFileAlt />
                                    Page {book.totalPages}
                                </span>
                            </div>

                            {/* Divider */}
                            <div className="border-t my-4"></div>

                            {/* Bottom */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                                        Category: {book.category}
                                    </span>

                                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">
                                        Rating: {book.rating}
                                    </span>
                                </div>

                                <button className="bg-indigo-600 text-white hover:bg-indigo-700 px-5 py-2 rounded-full text-sm transition flex items-center justify-center  gap-1 cursor-pointer">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListedReadList;
