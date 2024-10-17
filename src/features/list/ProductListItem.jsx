import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Card, List } from 'antd';
import styled from 'styled-components';

function ProductListItem({ product }) {
  const navigate = useNavigate();

  const isLoading = product?.loading;

  return (
    <List.Item>
      <StyledCard
        title={
          <Link to={`/${product.id}`} aria-label="product name">
            {product.title}
          </Link>
        }
        loading={isLoading}
        aria-label="product"
      >
        {isLoading ? (
          <></>
        ) : (
          <StyledButton
            onClick={() => navigate(`/${product.id}`)}
            variant="text"
            aria-label="go to product details"
          >
            <StyledImage
              src={product.images[0]}
              aria-label="product cover image"
            />
            <StyledInfo>
              <p>
                {product.brand} - {product.category}
              </p>
              <p className="price" aria-label="product price">
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                }).format(Number(product.price))}
              </p>
              <p>{product.reviews.length} comment(s)</p>
            </StyledInfo>
          </StyledButton>
        )}
      </StyledCard>
    </List.Item>
  );
}

export default ProductListItem;

const StyledCard = styled(Card)`
  .ant-skeleton {
    height: 300px;
  }
`;

const StyledInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  p {
    margin: 0 !important;
  }
  .price {
    font-weight: bold;
    color: #1677ff;
    font-size: 1.4em;
  }
`;
const StyledButton = styled(Button)`
  border: none !important;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 300px;
  padding: 0 !important;
  white-space: break-spaces;
`;

const StyledImage = styled.img`
  display: block;
  margin: 0 auto;
  width: auto;
  max-width: 200px;
  height: 180px;
  margin-bottom: 20px;
`;
