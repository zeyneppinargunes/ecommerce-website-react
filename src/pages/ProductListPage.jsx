import ProductList from '@Features/list/ProductList';
import { showBackButton } from '@Store/slices/layoutSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function ProductListPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showBackButton(false));
  }, []);

  return <ProductList />;
}

export default ProductListPage;
