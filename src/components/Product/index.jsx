import { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "../Button";

export class Product extends Component {
  render() {
    const { product, addToCart } = this.props;
    return (
      <div className="card card-compact bg-base-100 w-80 shadow-xl m-2">
        <figure>
          <img alt={product.name} src={product.img} />
        </figure>
        <div className="card-body">
          <h3 className="card-title">{product.name}</h3>
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
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};
