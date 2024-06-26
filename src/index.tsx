import React from 'react';
import { createRoot } from 'react-dom/client';
import { Main } from './main';
import './index.css'
import './main.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import ComponentsIndex from './pages/components';

const container = document.querySelector('#root');
const root = createRoot(container!);

const router = createBrowserRouter([
    {
        path: "/", 
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/components",
                element: <ComponentsIndex />
            }
        ]
    }
])

root.render(<RouterProvider router={router}/>);