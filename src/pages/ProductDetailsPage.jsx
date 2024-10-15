import React from 'react'
import { useNavigate } from 'react-router-dom';

function ProductDetailsPage() {
    const navigate = useNavigate();

  return (
    <div>
        <button onClick={() => navigate(-1)}>Back</button>
        ProductDetails
    </div>
  )
}

export default ProductDetailsPage