import React, { use } from 'react';
import Books from '../AllBookCard/AllBookCard';
import AllBookCard from '../AllBookCard/AllBookCard';

const allBooksPromise = fetch("/booksData.json").then(res => res.json());
const AllBooks = () => {
      
    const allBooksData = use(allBooksPromise);
    
    // console.log(allBooksData)

    
    return (
        <div>
            <h2 className='font-bold text-4xl text-center mb-8'>Books</h2>

            <div className="max-w-11/12 mx-auto mb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    allBooksData.map(book => <AllBookCard key={book.bookId} book = {book} ></AllBookCard>)
                }
            </div>
        </div>
    );
};

export default AllBooks;