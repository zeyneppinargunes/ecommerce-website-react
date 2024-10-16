import { useLazyGetSingleProductQuery } from '@Api/getmobil';
import { Col, Row } from 'antd';
import { useEffect } from 'react';
import styled from 'styled-components';

function ProductDetail({ productId }) {
  const [getSingleProduct, { data, isLoading, isError, error }] =
    useLazyGetSingleProductQuery();

  useEffect(() => {
    getSingleProduct(productId);
  }, [productId]);

  return data ? (
    <Row>
      <Col span={12}>
        <StyledImage src={data.images[0]} />
      </Col>
      <Col span={12}>
        <p>{data.title}</p>
        <p>{data.description}</p>
      </Col>
    </Row>
  ) : (
    <p>Product not found</p>
  );
}

export default ProductDetail;

const StyledImage = styled.img`
  width: 100%;
`;
