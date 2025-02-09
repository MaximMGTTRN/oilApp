import { createBrowserRouter, Navigate } from 'react-router-dom';
import Catalog from '../pages/Catalog/Catalog';
import Contacts from '../pages/Contacts/Contacts';
import Cooperation from '../pages/Cooperation/Cooperation';
import MainLayout from '../pages/MainLayout/MainLayout';
import { Category } from '../pages/Category/Category';
import { Product } from '../pages/Product/Product';
import { HomePage } from '../pages/Home/HomePage';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "catalog", element: <Catalog /> },
      { path: "catalog/:category", element: <Category />, },
      { path: "catalog/:category/:productId", element: <Product />, },
      { path: "contacts", element: <Contacts /> },
      { path: "cooperation", element: <Cooperation /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
]);
