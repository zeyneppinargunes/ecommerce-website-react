import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../features/details/ProductDetail";
import { useDispatch } from "react-redux";
import { showBackButton } from "../config/store/slices/layoutSlice";

function ProductDetailsPage() {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showBackButton(true))
  }, [])

  return <ProductDetail productId={id} />;
}

export default ProductDetailsPage;
