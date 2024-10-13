import { Component } from "react";
import PropTypes from "prop-types";

export class Layout extends Component {
  render() {
    return (
      <>
        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4 mx-10 justify-center">
          {this.props.children}
        </main>
      </>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.shape().isRequired,
};
