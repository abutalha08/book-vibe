import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Routes/Routes.jsx'
import BookContext from './Context/BookContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookContext>

    <RouterProvider router={router}></RouterProvider>

    </BookContext>
  </StrictMode>,
)
