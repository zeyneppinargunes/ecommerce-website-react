import MainLayout from '@Layouts/MainLayout';
import ProductDetailsPage from '@Pages/ProductDetailsPage';
import ProductListPage from '@Pages/ProductListPage';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        element: <ProductListPage />,
        index: true,
      },
      {
        path: '/:id',
        element: <ProductDetailsPage />,
      },
    ],
  },
]);

export default router;
