import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../../shared/layouts/MainLayout";
import ProductListPage from "../../pages/ProductListPage";
import ProductDetailsPage from "../../pages/ProductDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        element: <ProductListPage />,
        index: true,
      },
      {
        path: "/:id",
        element: <ProductDetailsPage />,
      },
    ],
  },
]);

export default router;
