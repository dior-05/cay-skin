import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import AboutPage from './pages/AboutPage';
import CartPage from './pages/CartPage';

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    errorElement:<ErrorPage/>,
    children: [
      {
        path:"/",
        element:<HomePage/>
      },
      {
        path:"/shop",
        element:<ShopPage/>
      },
      {
        path:"/about",
        element:<AboutPage/>
      },
      {
        path:"/cart",
        element:<CartPage/>
      },
    ]

  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);


