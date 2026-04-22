import React, { useContext } from 'react';
import { LibraryContext } from '../../Context/BookContext';

const ListedWishList = () => {

    const {wishList } = useContext(LibraryContext);
    console.log(wishList); 

    return (
        <div>
            wish list
        </div>
    );
};

export default ListedWishList;