import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Card, List } from 'antd';
import styled from 'styled-components';

function ProductListItem({ product }) {
  const navigate = useNavigate();

  return (
    <List.Item>
      <Card title={product.title}>
        <StyledImage src={product.images[0]} />
        <p>{product.description}</p>
        <p>{product.price}</p>
        {/* <Title>
          with link:
          <Link to={`/${product.id}`}>Detail</Link>
        </Title> */}
        <StyledButton onClick={() => navigate(`/${product.id}`)}>
          See details
        </StyledButton>
      </Card>
    </List.Item>
  );
}

export default ProductListItem;

const Title = styled.p`
  font-weight: bold;
`;
const StyledButton = styled(Button)`
  font-size: 24px;
`;

const StyledImage = styled.img`
  width: 100%;
  max-height: 364px;
`;
