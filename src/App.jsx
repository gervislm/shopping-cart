import { Component } from "react";
import { ProductList } from "./components/ProductList";
import "./App.css";
import { Layout } from "./components/Layout";
import { Navbar } from "./components/Navbar";

class App extends Component {
  state = {
    products: [
      { name: "Tomate", price: 1500, img: "/products/tomate.jpeg" },
      { name: "Cebolla", price: 1800, img: "/products/cebolla.jpeg" },
      { name: "Pimenton", price: 2000, img: "/products/pimenton.jpeg" },
    ],
    cart: [],
  };

  addToCart = (product) => {
    const { cart } = this.state;
    if (cart.find((x) => x.name === product.name)) {
      const newCart = cart.map((x) =>
        x.name === product.name
          ? {
              ...x,
              amount: x.amount + 1,
            }
          : x
      );
      return this.setState({ cart: newCart });
    }
    return this.setState({
      cart: this.state.cart.concat({
        ...product,
        amount: 1,
      }),
    });
  };

  render() {
    return (
      <div>
        <Navbar cart={this.state.cart} />
        <Layout>
          <ProductList
            addToCart={this.addToCart}
            products={this.state.products}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
