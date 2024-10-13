import { Component } from "react";
import PropTypes from "prop-types";
import { Logo } from "../Logo";
import { Cart } from "../Cart";

export class Navbar extends Component {
  render() {
    const { cart } = this.props;
    return (
      <nav className="navbar bg-base-100 w-screen">
        <Logo />
        <Cart cart={cart} />
      </nav>
    );
  }
}

Navbar.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
