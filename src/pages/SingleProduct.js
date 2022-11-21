import React from "react";
import { Link, useParams } from "react-router-dom";

const SingleProduct = () => {
  const { productId } = useParams();
  return (
    <section className="section product">
      <h2>{productId}</h2>
      <Link to="/products"> back to products page</Link>
    </section>
  );
};

export default SingleProduct;
