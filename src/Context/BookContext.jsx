import React, { createContext, useState } from 'react';

export const LibraryContext = createContext();



const BookContext = ({ children }) => {

    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);

    // console.log(storedBooks, "stored");

    const handleMarkAsRead = (currentBook) => {
        // step 1: store book id or store book object
        // step 2: where to store
        // step 2: array or collection
        //  step 3: If the book is already exist then show a alert or toast
        // step 4: if not then add the book in the array or collection

        const isExistBook = readList.find(
            (book) => book.bookId === currentBook.bookId);

        if (isExistBook) {
            alert("This book already exists in the read list!");
        } else {
            setReadList([...readList, currentBook]);
            alert(`${currentBook.bookName} is added to read list!`);
        }

        // console.log(currentBook, storedBooks, "book");
    };

    const handleWishList = (currentBook) => {
        // step 1: store book id or store book object
        // step 2: where to store
        // step 2: array or collection
        //  step 3: If the book is already exist then show a alert or toast
        // step 4: if not then add the book in the array or collection

        const isExistInReadList = readList.find(
            (book) => book.bookId === currentBook.bookId,
        );

        if (isExistInReadList) {
            alert("This book already exits in the read list!");
            return;
        }

        const isExistBook = wishList.find(
            (book) => book.bookId === currentBook.bookId,
        );

        if (isExistBook) {
            alert("The book is already exist in wish list!");
        } else {
            setWishList([...wishList, currentBook]);
            alert(`${currentBook.bookName} is added to wish list!`);
        }

        console.log(currentBook, readList, "book");
    };

    const contextValue = {
        readList,
        setReadList,
        handleMarkAsRead,
        wishList,
        setWishList,
        handleWishList
    }
    return (
        <LibraryContext.Provider value={contextValue}>
            {children}

        </LibraryContext.Provider>
    );
};

export default BookContext;