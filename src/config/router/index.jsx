import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../../shared/layouts/MainLayout";
import ProductList from "../../pages/ProductList";
import ProductDetails from "../../pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        element: <ProductList />,
        index: true,
      },
      {
        path: "/:id",
        element: <ProductDetails />,
      },
    ],
  },
]);

export default router;
