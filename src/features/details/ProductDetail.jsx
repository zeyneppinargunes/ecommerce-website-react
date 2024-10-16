import React, { useEffect } from "react";
import { useLazyGetSingleProductQuery } from "../../config/api/getmobil";
import styled from "styled-components";
import { Col, Row } from "antd";

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
  ) : <p>Product not found</p> ;
}

export default ProductDetail;

const StyledImage = styled.img`
  width: 100%;
`;
