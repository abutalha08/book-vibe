import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { LibraryContext } from '../../Context/BookContext';
import ListedReadList from '../../components/ListedBooks/ListedReadList';
import ListedWishList from '../../components/ListedBooks/ListedWishList';
import { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';

const ListedBooks = () => {

    const [sortingType, setSortingType] = useState("");

    //   console.log(sortingType, "sortingType");


    return (
        <div className="max-w-11/12 mx-auto my-3 p-10">
            <div className="flex justify-center my-3">
                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="btn m-1 bg-[#00D3BB] text-white font-bold flex items-center gap-1">
                        Sort By: {sortingType || "Select"}
                        <RiArrowDropDownLine className="w-5 h-5" />
                    </div>
                    <ul
                        tabIndex="-1"
                        className="dropdown-content menu bg-base-100  rounded-box z-1 w-52 p-2 shadow-sm"
                    >
                        <li onClick={() => setSortingType("pages")}>
                            <a>Number of Pages</a>
                        </li>
                        <li onClick={() => setSortingType("rating")}>
                            <a>Rating</a>
                        </li>
                    </ul>
                </div>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <ListedReadList sortingType={sortingType}></ListedReadList>
                </TabPanel>

                <TabPanel>
                    <ListedWishList sortingType={sortingType}></ListedWishList>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;