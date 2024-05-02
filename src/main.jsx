import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import { RouterProvider, createRootRoute, createRoute } from '@tanstack/react-router'
import { Router, RouterProvider } from "@tanstack/react-router";

import router from './router.jsx';

import './index.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            {/* <App /> */}
            <RouterProvider router={router} />
        </QueryClientProvider>
    </React.StrictMode>,
)
