import ProductList from '@Features/list/ProductList';
import MainPageBody from '@Layouts/MainPageBody';
import { showBackButton } from '@Store/slices/layoutSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function ProductListPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showBackButton(false));
  }, []);

  return (
    <MainPageBody
      breadcrumbItems={[
        { title: <Link to="/">Home</Link> },
        { title: 'Products' },
      ]}
    >
      <ProductList />
    </MainPageBody>
  );
}

export default ProductListPage;
