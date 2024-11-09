import { Component } from "react";
import { ProductList } from "./components/ProductList";
import "./App.css";
import { Layout } from "./components/Layout";
import { Navbar } from "./components/Navbar";
import axios from "axios";
import { Footer } from "./components/Footer";

const API = "https://api.escuelajs.co/api/v1/products";

class App extends Component {
  state = {
    products: [],
    cart: [],
    productsToShow: 12,
  };

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = async () => {
    try {
      const response = await axios.get(API);
      this.setState({ products: response.data });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  addToCart = (product) => {
    const { cart } = this.state;
    if (cart.find((x) => x.id === product.id)) {
      const newCart = cart.map((x) =>
        x.id === product.id
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

  loadMoreProducts = () => {
    this.setState((prevState) => ({
      productsToShow: prevState.productsToShow + 16,
    }));
  };

  render() {
    const productsToDisplay = this.state.products.slice(
      0,
      this.state.productsToShow
    );
    return (
      <div className="w-auto">
        <Navbar cart={this.state.cart} />
        <Layout>
          <ProductList
            addToCart={this.addToCart}
            products={productsToDisplay}
          />
        </Layout>
        {this.state.productsToShow < this.state.products.length && (
          <div className="flex justify-center m-4">
            <button className="btn btn-primary" onClick={this.loadMoreProducts}>
              Load more products
            </button>
          </div>
        )}
        <Footer />
      </div>
    );
  }
}

export default App;
