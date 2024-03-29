import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import products from "../../config/data.json";
import "./Home.css";
import Cart from "../Cart/Cart";
import Topbar from "../Topbar/Topbar";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products.products,
      filters: [],
      productInCart: [],
      isCartActive: false,
    };
  }
  byOrder = (products) => {
    this.setState({
      products: products,
    });
  };

  filterHandler = (size) => {
    if (this.state.filters.includes(size)) {
      this.setState({
        filters: this.state.filters.filter((fil) => fil !== size),
      });
    } else {
      this.setState({
        filters: [...this.state.filters, size],
      });
    }
  };
  removeFromCart = (product) => {
    let afterRemoved = this.state.productInCart.filter(
      (pros) => pros.sku !== product.sku
    );
    this.setState({
      productInCart: afterRemoved,
    });
  };
  decreaseQuantity = (product) => {
    let toUpdate = this.state.productInCart.find(
      (pros) => pros.sku === product.sku
    );
    toUpdate.quantity -= 1;
    this.setState({
      productInCart: [...this.state.productInCart],
    });
  };

  navToggle = () => {
    this.setState({
      isCartActive: !this.state.isCartActive,
    });
  };
  addToCart = (product) => {
    if ("quantity" in product) {
      let toUpdate = this.state.productInCart.find(
        (pros) => pros.sku === product.sku
      );
      toUpdate.quantity += 1;
      this.setState({
        productInCart: [...this.state.productInCart],
        isCartActive: true,
      });
    } else {
      product.quantity = 1;
      this.setState({
        productInCart: [...this.state.productInCart, product],
        isCartActive: true,
      });
    }
  };
  filterProducts = () => {};

 

  render() {
    let filterProducts = [];
    this.state.filters.forEach((filter) => {
      products.products.forEach((product) => {
        if (product.availableSizes.includes(filter)) {
          filterProducts.push(product);
        }
      });
    });
    return (
      <div className="p">
        <div className="bag-header">
          <h1 className="close">X</h1>
          <span class="bag" onClick={this.navToggle}>
            <span class="bag__quantity">
              {this.state.productInCart.reduce(
                (acc, pro) => (acc += pro.quantity),
                0
              )}
            </span>
          </span>
        </div>
        <div className="all section">
          <div className="container flex">
            <section className="size-filter">
              <Sidebar
                filterHandler={this.filterHandler}
                state={this.state.products}
                filters={this.state.filters}
              />
            </section>
            <main className="product-section">
              <div className="top flex justify-content">
                <p className="numberOfProduct">
                  {filterProducts.length > 0
                    ? filterProducts.length
                    : this.state.products.length}{" "}
                  {filterProducts.length > 1 || this.state.products.length
                    ? "Products"
                    : "Product"}{" "}
                  found.
                </p>
                <Topbar state={this.state.products} filter={this.byOrder} />
              </div>
              {this.state.filters.length == 0
                ? this.createUI(products.products)
                : this.createUI(filterProducts)}
            </main>
            <div className="product-cart">
              {this.state.isCartActive ? (
                <Cart
                  products={this.state.productInCart}
                  addToCart={this.addToCart}
                  decreaseQuantity={this.decreaseQuantity}
                  removeFromCart={this.removeFromCart}
                ></Cart>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
