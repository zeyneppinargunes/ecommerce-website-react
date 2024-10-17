import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '@Layouts/MainLayout';
import ErrorBoundary from '@Errors/ErrorBoundary';

const ProductListPage = lazy(() => import('@Pages/ProductListPage'));
const ProductDetailsPage = lazy(() => import('@Pages/ProductDetailsPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        element: <ProductListPage />,
        index: true,
      },
      {
        path: ':id',
        element: <ProductDetailsPage />,
      },
    ],
  },
]);

export default router;
