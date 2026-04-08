import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../layout/MainLayout.jsx';
import ErrorPages from '../errorpages/ErrorPages.jsx';
import HomePage from '../pages/homepage/HomePage.jsx';
import Books from '../pages/books/Books.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPages />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/books', element: <Books /> },
    ],
  },
]);
