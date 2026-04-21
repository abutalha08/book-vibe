import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Homepage from "../Pages/Homepage/Homepage";
import NotFound from "../Pages/NotFound/NotFound";
import ListedBooks from "../Pages/ListedBooks/ListedBooks";
import BookDetails from "../Pages/BookDetails/BookDetails";

export const router = createBrowserRouter ([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                index: true,
                element : <Homepage></Homepage>
            },
            {
                path: "/listedBooks",
                element: <ListedBooks></ListedBooks>
            },
            {
                path: "/bookDetails/:expectedBookId",
                element: <BookDetails></BookDetails>,
                loader: ()=> fetch("/booksData.json")
            }
        ]
    },
    {
        path: "*",
        element: <NotFound></NotFound>
    }
])