import React from "react";
import { Card } from "react-bootstrap";
import "./Product.css";
import Rating from "./Rating";
import { Link } from "react-router-dom";
const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} />
      </Link>
      <Card.Body>
        <Link className="pr-title" to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <div className="my-3">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
              color={"#f8e825"}
            ></Rating>
          </div>
          <div>$ {product.price}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
