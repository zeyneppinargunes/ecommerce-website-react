import ProductDetail from '@Features/details/ProductDetail';
import { showBackButton } from '@Store/slices/layoutSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

function ProductDetailsPage() {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showBackButton(true));
  }, []);

  return <ProductDetail productId={id} />;
}

export default ProductDetailsPage;
