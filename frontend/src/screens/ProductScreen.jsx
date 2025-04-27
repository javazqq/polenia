import { useParams } from "react-router-dom";
import { useGetProductDetailsQuery } from "../slices/productsApiSlice";
import { Spinner, Alert, Button } from "react-bootstrap";
import "./ProductScreen.css";

const ProductScreen = () => {
  const { id: productId } = useParams();
  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId);

  if (isLoading) {
    return (
      <div className="spinner-container">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="danger">Error fetching product: {error.message}</Alert>
    );
  }

  return (
    <div className="product-screen">
      <div className="product-content">
        <div className="product-details">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <h3 className="price">${product.price}</h3>
          <p className={product.stock > 0 ? "in-stock" : "out-of-stock"}>
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </p>
          <Button variant="primary" disabled={product.stock === 0}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
