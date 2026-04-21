
import { useLoaderData, useParams } from 'react-router';
import { LibraryContext } from '../../Context/BookContext';
import { useContext } from 'react';


// data fetching method 1 ->
// const booksPromise = fetch("/booksData.json").then(res => res.json());





const BookDetails = () => {

    // Get dynamic book ID (expectedBookId) from URL using useParams()
    const { expectedBookId } = useParams();
    // console.log(expectedBookId);



    // Method 1 
    // const books = use(booksPromise);
    // console.log(books,"books");



    // data fetching method 2 ->
    const books = useLoaderData();
    // console.log(books,"data fetch using useLoaderData hook");


    const expectedBook = books.find(book => book.bookId == Number(expectedBookId));  // Convert expectedBookId (string) to number because JSON bookId is a number


    // console.log(expectedBook, "expectedBook");


    const { handleMarkAsRead } = useContext(LibraryContext);
    // console.log(handleMarkAsRead);




    return (
        <div className="max-w-11/12 mx-auto p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                {/* Left - Image */}
                <div className="bg-gray-100 rounded-2xl p-6 flex justify-center">
                    <img
                        src={expectedBook.image}
                        alt={expectedBook.bookName}
                        className="w-64 md:w-72 lg:w-80 object-contain hover:scale-105 transition duration-300"
                    />
                </div>

                {/* Right*/}
                <div>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                        {expectedBook.bookName}
                    </h1>

                    <p className="text-gray-500 mb-4">
                        By : {expectedBook.author}
                    </p>

                    <hr className="mb-4" />

                    <p className="text-lg font-medium mb-2">
                        {expectedBook.category}
                    </p>

                    <hr className="mb-4" />

                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                        <span className="font-semibold">Review :</span>{" "}
                        {expectedBook.review}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {expectedBook?.tags?.map((tag) => (
                            <span
                                key={tag}
                                className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    <hr className="mb-4" />

                    {/* Info */}
                    <div className="space-y-2 text-sm">
                        <p>
                            <span className="text-gray-500">Number of Pages:</span>{" "}
                            <span className="font-semibold">{expectedBook.totalPages}</span>
                        </p>
                        <p>
                            <span className="text-gray-500">Publisher:</span>{" "}
                            <span className="font-semibold">{expectedBook.publisher}</span>
                        </p>
                        <p>
                            <span className="text-gray-500">Year of Publishing:</span>{" "}
                            <span className="font-semibold">{expectedBook.yearOfPublishing}</span>
                        </p>
                        <p>
                            <span className="text-gray-500">Rating:</span>{" "}
                            <span className="font-semibold">{expectedBook.rating}</span>
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 mt-6">
                        <button onClick={() => handleMarkAsRead(expectedBook)} className="px-6 py-2 border border-gray-400 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                            Marked as Read
                        </button>
                        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition shadow-md hover:shadow-lg cursor-pointer">
                            Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;