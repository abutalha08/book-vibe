import React, { createContext, useState } from 'react';

export const LibraryContext = createContext();



const BookContext = ({ children }) => {

    const [storedBooks, setStoredBooks] = useState([]);

    // console.log(storedBooks, "stored");

    const handleMarkAsRead = (currentBook) => {
        // step 1: store book id or store book object
        // step 2: where to store
        // step 2: array or collection
        //  step 3: If the book is already exist then show a alert or toast
        // step 4: if not then add the book in the array or collection

        const isExistBook = storedBooks.find(
            (book) => book.bookId === currentBook.bookId);

        if (isExistBook) {
            alert("This book already exists in the list");
        } else {
            setStoredBooks([...storedBooks, currentBook]);
            alert(`${currentBook.bookName} is added to read list`);
        }

        // console.log(currentBook, storedBooks, "book");
    };

    const contextValue = {
        storedBooks,
        setStoredBooks,
        handleMarkAsRead
    }
    return (
        <LibraryContext.Provider value={contextValue}>
            {children}

        </LibraryContext.Provider>
    );
};

export default BookContext;