import React, { useEffect } from "react";
import ProductList from "../features/list/ProductList";
import { useDispatch } from "react-redux";
import { showBackButton } from "../config/store/slices/layoutSlice";

function ProductListPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showBackButton(false))
  }, [])

  return <ProductList />;
}

export default ProductListPage;
