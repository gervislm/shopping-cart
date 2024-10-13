import { Component } from "react";
import PropTypes from "prop-types";

export class CartDetails extends Component {
  render() {
    const { cart } = this.props;
    const subtotal = cart.reduce(
      (total, item) => total + item.price * item.amount,
      0
    );

    return (
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
      >
        <div className="card-body">
          <ul className="w-full">
            {cart.map((x) => (
              <li key={x.name} className="flex flex-row  items-center mb-1">
                {
                  <img
                    alt={x.name}
                    src={x.img}
                    width={50}
                    className="rounded-2xl"
                  />
                }
                <span className="text-lg grow font-bold pl-2">{x.name}</span>
                <span className="text-xl  font-bold">{x.amount}</span>
              </li>
            ))}
          </ul>
          <span className="text-xl text-info">Subtotal: ${subtotal}</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    );
  }
}

CartDetails.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ).isRequired,
};
