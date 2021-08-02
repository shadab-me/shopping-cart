import "./Cart.css";

function totalPrice(products) {
  return products
    .reduce((acc, pro) => (acc += pro.price * pro.quantity), 0)
    .toFixed(2);
}
function Cart(props) {
  return (
    <div className="cart">
      <div class="float-cart__header">
        <span class="bag">
          <span class="bag__quantity">
            {props.products.reduce((acc, pro) => (acc += pro.quantity), 0)}
          </span>
        </span>
        <span class="header-title">Cart</span>
      </div>

      {props.product
        ? null
        : props.products.map((product) => {
            return (
              <div className="product-cart flex " key={product}>
                <div className="product-img-cart">
                  <img
                    src={"/static/products/" + product.sku + "_2" + ".jpg"}
                    alt={product.title}
                  ></img>
                </div>
                <div className="product-text-cart">
                  <p className="product-title-cart">{product.title}</p>
                  <p className="style">{product.style}</p>
                  <p className="quantity">Quantity: {product.quantity}</p>
                </div>

                <div className="product-price-cart">
                  <div className="remove-cart">
                    <img
                      src="\static\sprite_delete-icon.png"
                      alt="delete-btn"
                      onClick={() => props.removeFromCart(product)}
                    ></img>
                  </div>
                  <p className="product-price">
                    $ {(product.price * product.quantity).toFixed(1)}
                  </p>
                  <div className="controls">
                    <button
                      disabled={product.quantity == 1}
                      className="btn increase"
                      className={
                        product.quantity == 1 ? "disable btn" : "btn decrease"
                      }
                      onClick={() => props.decreaseQuantity(product)}
                    >
                      -
                    </button>
                    <button
                      className="btn increase"
                      onClick={() => {
                        props.addToCart(product);
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

      <div className="total flex justify-content flex-wrap">
        <h5 className="total-text">Total</h5>
        <h5 className="product-price">$ {totalPrice(props.products)}</h5>
        <button
          className="checkout"
          onClick={() =>
            alert(
              " Order Of $ " +
                totalPrice(props.products) +
                "Successfully Placed"
            )
          }
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
