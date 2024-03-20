import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from './routes.js'
import './index.css';

//BOILERPLATE

// ✅ 2. Create a `RouterProvider` in `index.js`.
// ✅ 2a. Import `createBrowserRouter` and `RouterProvider`.
const router = createBrowserRouter(routes)
// ✅ 2b. Create a router with `createBrowserRouter` that accepts `routes` from `routes.js`.
const root = ReactDOM.createRoot(document.getElementById('root'))

// ✅ 2c. Render `RouterProvider` in the root.
root.render(
    <RouterProvider router={router} />
)
