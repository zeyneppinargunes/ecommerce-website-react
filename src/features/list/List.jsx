import React from "react";
import ListItem from "./ListItem";

const products = [
  {
    id: 1,
    title: "bebeg",
  },
  {
    id: 2,
    title: "vlad",
  },
];

function List() {
  return (
    <>
      {products.map((product) => (
        <ListItem key={product.id} product={product} />
      ))}
    </>
  );
}

export default List;
