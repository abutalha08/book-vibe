import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Homepage from "../Pages/Homepage/Homepage";
import Books from "../Pages/Books/Books";
import BookDetails from "../Pages/BookDetails/BookDetails";
import NotFound from "../Pages/NotFound/NotFound";

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
                path: "/books",
                element: <Books></Books>
            },
            {
                path: "/bookDetails",
                element: <BookDetails></BookDetails>
            }
        ]
    },
    {
        path: "*",
        element: <NotFound></NotFound>
    }
])