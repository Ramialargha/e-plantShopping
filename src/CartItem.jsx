import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice.jsx';
import './CartItem.css';

// Cost strings look like "$15"; convert to a number
const parseCost = (cost) => parseFloat(String(cost).replace('$', ''));

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Subtotal for one plant type
  const calculateTotalCost = (item) => parseCost(item.cost) * item.quantity;

  // Total of everything in the cart
  const calculateTotalAmount = () =>
    cart.reduce((total, item) => total + calculateTotalCost(item), 0);

  const handleContinueShopping = (e) => {
    onContinueShopping(e);
  };

  const handleCheckoutShopping = () => {
    alert('Functionality to be added for future reference');
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      // Quantity would reach zero, so remove the item
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  return (
    <div className="cart-container">
      <h2 className="cart-total">Total Cart Amount: ${calculateTotalAmount().toFixed(2)}</h2>

      {cart.length === 0 && <p className="cart-empty">Your cart is empty.</p>}

      <div>
        {cart.map((item) => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">Unit price: {item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>
                  -
                </button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>
                  +
                </button>
              </div>
              <div className="cart-item-total">Subtotal: ${calculateTotalCost(item).toFixed(2)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={handleContinueShopping}>
          Continue Shopping
        </button>
        <br />
        <button className="get-started-button1" onClick={handleCheckoutShopping}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;
