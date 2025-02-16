import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {NewRating} from "./NewRating.tsx";
import {Welcome} from "./Welcome.tsx";
import {Home} from "./Home.tsx";

const router = createBrowserRouter([
        {
            path: '/', element: <App/>,
            children: [
                {path: '/welcome', element: <Welcome/>},
                {path: '/home', element: <Home/>},
                {path: '/new', element: <NewRating/>},
            ],
        },
    ], {basename: '/rating-grapes/'})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}>
        </RouterProvider>
    </React.StrictMode>,
)
