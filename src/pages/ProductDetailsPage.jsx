import ProductDetail from '@Features/details/ProductDetail';
import MainPageBody from '@Layouts/MainPageBody';
import { showBackButton } from '@Store/slices/layoutSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

function ProductDetailsPage() {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showBackButton(true));
  }, []);

  return (
    <MainPageBody
      breadcrumbItems={[
        { title: <Link to="/">Home</Link> },
        { title: <Link to="/">Products</Link> },
        { title: id },
      ]}
    >
      <ProductDetail productId={id} />
    </MainPageBody>
  );
}

export default ProductDetailsPage;
