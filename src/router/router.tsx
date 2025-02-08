import { createBrowserRouter, Outlet, Navigate } from 'react-router-dom';
import Home from '../pages/Home/Home';
import AboutUs from '../pages/AboutUs/AboutUs';
import Catalog from '../pages/Catalog/Catalog';
import Contacts from '../pages/Contacts/Contacts';
import Cooperation from '../pages/Cooperation/Cooperation';
import MainLayout from '../pages/MainLayout/MainLayout';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "about-us", element: <AboutUs text='О нас' colorStyle={'colorStyle1'} /> },
      { path: "catalog", element: <Catalog /> },
      { path: "catalog/:category", element: <AboutUs text='Категория' colorStyle={'colorStyle2'} />, },
      { path: "catalog/:category/:productId", element: <AboutUs text='Товар' colorStyle={'colorStyle2'} />, },
      { path: "contacts", element: <Contacts /> },
      { path: "cooperation", element: <Cooperation /> },
    ],
  },
]);

// export const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />,
//     children: [
//       {
//         path: '',
//         element: <>
//           <AboutUs text='О нас' colorStyle={'colorStyle1'} />
//           <AboutUs text='Раздел 2' colorStyle={'colorStyle2'} />
//           <AboutUs text='Раздел 3' colorStyle={'colorStyle1'} />
//         </>,
//       },
//     ],
//   },
//   {
//     path: '/catalog',
//     element: <Catalog />,
//     children: [
//       {
//         path: ':category',
//         element: <AboutUs text='Категория' colorStyle={'colorStyle2'} />,
//       },
//       {
//         path: ':category/:productId',
//         element: <AboutUs text='Товар' colorStyle={'colorStyle2'} />,
//       },
//     ],
//   },
//   {
//     path: '/contacts',
//     element: <Contacts />,
//   },
//   {
//     path: '/cooperation',
//     element: <Cooperation />,
//   },
//   {
//     path: '*',
//     element: <Navigate to="/" replace />,
//   },
// ]);