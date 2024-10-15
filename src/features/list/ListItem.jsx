import React from "react";
import { Link, useNavigate } from "react-router-dom";

function ListItem({ product }) {
  const navigate = useNavigate();

  return (
    <div key={product.id}>
      <h3>{product.title}</h3>
      <p>
        with link:
        <Link to={`/${product.id}`}>Detail</Link>
      </p>
      <button onClick={() => navigate(`/${product.id}`)}>
        with button: detail
      </button>
    </div>
  );
}

export default ListItem;
