import { useLazyGetSingleProductQuery } from '@Api/getmobil';
import { Col, Row, notification } from 'antd';
import { useEffect } from 'react';
import styled from 'styled-components';

function ProductDetail({ productId }) {
  const [antDesignNotificationApi, antDesignNotificationContextHolder] =
    notification.useNotification();

  const [getSingleProduct, { data, isLoading, isError, error }] =
    useLazyGetSingleProductQuery();

  useEffect(() => {
    getSingleProduct(productId);
  }, [productId]);

  // error handling for api request
  //    to make the api throw error, change id arg to an invalid value string above
  //    like getSingleProduct(productId + 'asd');
  useEffect(() => {
    if (isError && error) {
      console.log(error);
      antDesignNotificationApi.error({
        message: 'Status Code:' + error.status,
        description: error.data.message,
      });
    }
  }, [isError, error]);

  return (
    <>
      {antDesignNotificationContextHolder}
      {data ? (
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
      )}
    </>
  );
}

export default ProductDetail;

const StyledImage = styled.img`
  width: 100%;
`;
