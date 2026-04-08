import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../layout/MainLayout.jsx';
import ErrorPages from '../errorpages/ErrorPages.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPages />,
    children: [
      { path: '/', element: <h1>Home</h1> },
      { path: '/books', element: <h1>Books</h1> },
    ],
  },
]);
