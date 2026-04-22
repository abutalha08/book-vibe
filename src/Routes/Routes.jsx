import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Homepage from "../Pages/Homepage/Homepage";
import NotFound from "../Pages/NotFound/NotFound";
import ListedBooks from "../Pages/ListedBooks/ListedBooks";
import BookDetails from "../Pages/BookDetails/BookDetails";
import PagesToRead from "../Pages/PagesToRead/PagesToRead";

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
            },
            {
                path: "/pagesToRead",
                element: <PagesToRead></PagesToRead>
            }
            
        ]
    },
    {
        path: "*",
        element: <NotFound></NotFound>
    }
])