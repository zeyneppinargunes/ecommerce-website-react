import React from 'react';
import { Col, Row, Skeleton } from 'antd';

function ProductDetailSkeleton() {
  return (
    <Row justify="center" gutter={12}>
      <Col span={8}>
        <Skeleton.Image
          active
          block
          style={{
            display: 'flex',
            width: '25vw',
            height: '25vw',
            alignItems: 'center',
          }}
        />
      </Col>
      <Col span={8}>
        <Skeleton.Input active block style={{ margin: '0 0 16px 0' }} />
        <Skeleton.Input active block style={{ margin: '0 0 16px 0' }} />
        <Skeleton.Input active block style={{ margin: '0 0 16px 0' }} />
        <Skeleton.Input active block style={{ margin: '0 0 16px 0' }} />
        <Skeleton.Input active block style={{ margin: '0 0 16px 0' }} />
        <Skeleton.Input active block style={{ margin: '0 0 16px 0' }} />
      </Col>
    </Row>
  );
}

export default ProductDetailSkeleton;
