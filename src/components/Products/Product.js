const Product = ({ product }) => {
  return (
    <div className="product">
      <div className="product-img">
        <img src={"/static/products/" + product.sku + "_1" + ".jpg"}></img>
        <span className="shipping">
          {product.isFreeShipping ? "Free Shipping" : ""}
        </span>
      </div>
      <div className="product-text">
        <h5>{product.title}</h5>
        <hr></hr>
        <h2>
          <span className="usd">$</span>
          {product.price}
        </h2>
        <p className="installment">
          or {product.installments} x{" "}
          {(product.price / product.installments).toFixed(2)}{" "}
        </p>
      </div>
      <div className="add"></div>
      <button onClick={() => this.addToCart(product)} className="addtocart">
        Add to cart
      </button>
    </div>
  );
};

export default Product;
