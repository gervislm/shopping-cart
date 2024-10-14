import { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "../Button";

export class Product extends Component {
  render() {
    const { product, addToCart } = this.props;
    return (
      <div className="card card-compact bg-base-100 w-80 shadow-xl m-2">
        <figure>
          <img alt={product.title} src={product.images[0]} />
        </figure>
        <div className="card-body">
          <h3 className="card-title">{product.title}</h3>
          <p>Price: {product.price}</p>
          <div className="card-actions justify-end">
            <Button
              className="btn btn-primary"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};
