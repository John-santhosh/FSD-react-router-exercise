import { useGlobalContext } from "../context";

import { FaAngleUp, FaAngleDown } from "react-icons/fa";
const Cart = () => {
  const { increase, decrease, removeItem, clearCart, state, totalAmt } =
    useGlobalContext();

  if (state.length === 0) {
    return (
      <div className="cart-title">
        <h2>No items in the cart</h2>
        <p>Add something from products</p>
      </div>
    );
  }
  return (
    <>
      <h2 className="cart-title">YOUR BAG</h2>
      <div className="cart-container">
        {state.map((item) => {
          const { id, title, price, count, image, amt } = item;
          return (
            <div key={id} className="cart-item">
              <div className="cart-img">
                <img src={image} alt="" />
              </div>
              <div className="cart-item-details">
                <h5 className="item-title">{title}</h5>
                <p>${price}</p>
                <button
                  onClick={() => {
                    removeItem(id);
                  }}
                  className="rmv-btn"
                >
                  Remove
                </button>
              </div>
              <div className="cart-item-count">
                <button
                  onClick={() => {
                    increase(id);
                  }}
                >
                  <FaAngleUp className="arrows" />
                </button>
                {amt}

                <button
                  onClick={() => {
                    decrease(id);
                  }}
                >
                  <FaAngleDown className="arrows" />
                </button>
              </div>
            </div>
          );
        })}
        <hr />
        <div className="total">
          <p>Total</p>

          <p className="total-cmt">{`$${totalAmt.toFixed(2)}`}</p>
        </div>

        <button
          className="clear-cart"
          onClick={() => {
            clearCart();
          }}
        >
          clear cart
        </button>
      </div>
    </>
  );
};

export default Cart;
