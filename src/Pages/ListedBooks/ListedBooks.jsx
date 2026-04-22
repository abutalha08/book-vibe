import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { LibraryContext } from '../../Context/BookContext';
import { useContext } from 'react';
import ListedReadList from '../../components/ListedBooks/ListedReadList';
import ListedWishList from '../../components/ListedBooks/ListedWishList';

const ListedBooks = () => {


    const { readList, wishList } = useContext(LibraryContext);
    console.log(readList, wishList)


    return (
        <div className="max-w-11/12 mx-auto my-3 p-10">
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <ListedReadList></ListedReadList>
                </TabPanel>

                <TabPanel>
                    <ListedWishList></ListedWishList>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;