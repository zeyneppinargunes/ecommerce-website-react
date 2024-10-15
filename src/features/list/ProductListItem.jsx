import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Card, List } from "antd";
import styled from 'styled-components'

function ProductListItem({ product }) {
  const navigate = useNavigate();

  return (
    <List.Item>
      <Card title={product.title}>Card content</Card>
      <Title>
        with link:
        <Link to={`/${product.id}`}>Detail</Link>
      </Title>
      <StyledButton onClick={() => navigate(`/${product.id}`)}>
        with button: detail
      </StyledButton>
    </List.Item>
  );
}

export default ProductListItem;

const Title = styled.p`
  font-weight: bold;
`
const StyledButton = styled(Button)`
  font-size: 24px;
`