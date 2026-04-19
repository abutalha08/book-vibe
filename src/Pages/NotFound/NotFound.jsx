import React from "react";
import { Link } from "react-router";

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">

            {/* 404 Text */}
            <h1 className="text-7xl font-bold" style={{ color: "#23BE0A" }}>
                404
            </h1>

            {/* Message */}
            <h2 className="text-2xl font-semibold mt-4 text-gray-800">
                Page Not Found
            </h2>

            <p className="text-gray-500 mt-2 max-w-md">
                Sorry, the page you are looking for doesn’t exist or has been moved.
            </p>

            {/* Button */}
            <Link
                to="/"
                className="mt-6 px-6 py-3 rounded-lg text-white font-medium transition"
                style={{ backgroundColor: "#23BE0A" }}
            >
                Back to Homepage
            </Link>

        </div>
    );
};

export default NotFound;