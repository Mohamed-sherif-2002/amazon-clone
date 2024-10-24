import React, { useState, useEffect } from 'react';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || {};
    setCartItems(Object.values(storedCart));
  }, []);

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);

    const storedCart = JSON.parse(localStorage.getItem('cart')) || {};
    delete storedCart[productId];
    localStorage.setItem('cart', JSON.stringify(storedCart));
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <div className='empty'>Your cart is empty.</div>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id} className="cart-item">
              <img src={item.image || item.images[0]} alt={item.title} />
              <div className='productTitle'>{item.title}</div>
              <div className='productPrice'>Price: ${item.price}</div>
              <div className='productquantity'>Quantity: {item.quantity || 1}</div>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
