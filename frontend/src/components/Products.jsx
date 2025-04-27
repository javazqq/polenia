import React from "react";
import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import "./Products.css";

const Products = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching products: {error.message}</div>;
  }

  return (
    <div className="products-container">
      <h1 className="products-title">Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <Link
            to={`/products/${product.id}`}
            style={{ textDecoration: "none" }}
            key={product.id}
          >
            <div className="product-card">
              <h2>{product.name}</h2>
              <p className="price">${product.price}</p>
              <p className="stock">In stock: {product.stock}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
