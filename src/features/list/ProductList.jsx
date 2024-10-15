import React from "react";
import { List } from "antd";

import ProductListItem from "./ProductListItem";

const products = [
  {
    id: 1,
    title: "bebeg",
  },
  {
    id: 2,
    title: "vlad",
  },
  {
    id: 3,
    title: "yugü",
  },
  {
    id: 4,
    title: "zegü",
  },
  {
    id: 5,
    title: "vlagü",
  },
];

function ProductList() {
  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 6,
        xxl: 3,
      }}
      dataSource={products}
      renderItem={(product) => <ProductListItem key={product.id} product={product} />}
    />
  );
}

export default ProductList;
