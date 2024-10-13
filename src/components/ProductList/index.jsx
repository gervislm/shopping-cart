import { Component } from "react";
import PropTypes from "prop-types";
import { Product } from "../Product";

export class ProductList extends Component {
  render() {
    const { products, addToCart } = this.props;

    return (
      <>
        {products.map((product) => (
          <Product addToCart={addToCart} key={product.name} product={product} />
        ))}
      </>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  addToCart: PropTypes.func.isRequired,
};
