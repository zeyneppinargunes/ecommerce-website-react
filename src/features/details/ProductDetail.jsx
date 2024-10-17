import { useLazyGetSingleProductQuery } from '@Api/getmobil';
import { Col, Row, Skeleton, notification } from 'antd';
import { useEffect } from 'react';
import styled from 'styled-components';
import ProductDetailSkeleton from './ProductDetailSkeleton';
import Reviews from './Reviews';
import { Tag } from 'antd';

function ProductDetail({ productId }) {
  const [antDesignNotificationApi, antDesignNotificationContextHolder] =
    notification.useNotification();

  const [getSingleProduct, { data, isLoading, isSuccess, isError, error }] =
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

  if (!isSuccess || isLoading) {
    return <ProductDetailSkeleton />;
  }

  return (
    <>
      {antDesignNotificationContextHolder}
      <Row justify="center" gutter={12}>
        <Col span={8}>
          <StyledImage src={data.images[0]} />
        </Col>
        <Col span={8}>
          <StyledInfo>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <h1>
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(Number(data.price))}
            </h1>
            <div>
              {data.tags.map((tag) => (
                <Tag color="blue">{tag}</Tag>
              ))}
            </div>
            <div>
              <p>
                {data.category} - {data.brand}
              </p>
              <p>
                {data.availabilityStatus} - {data.shippingInformation}
              </p>
            </div>
          </StyledInfo>
        </Col>
      </Row>
      <Row justify="center" gutter={12}>
        <Col span={12}>
          <Reviews reviews={data.reviews} />
        </Col>
      </Row>
    </>
  );
}

export default ProductDetail;

const StyledImage = styled.img`
  width: 100%;
`;

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 0;
`;
