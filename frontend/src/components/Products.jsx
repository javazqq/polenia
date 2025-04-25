import React, { useState, useEffect } from 'react';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="products-container">
      <h1 className="products-title">Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <a href={`/products/${product.id}`}>
            <h2>{product.name}</h2>
            </a>
            <p>{product.description}</p>
            <p className="price">${product.price}</p>
            <p className="stock">In stock: {product.stock}</p>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default Products;
