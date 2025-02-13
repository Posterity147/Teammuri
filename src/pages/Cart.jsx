// Cart.js
import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Cart = () => {
  // Use location to get cart data passed from the Toyota page
  const location = useLocation();
  const [cart, setCart] = React.useState(location.state?.cart || []); // Fallback to empty array if no cart is passed

  // Remove item from the cart
  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index); // Filter out the item at the specified index
    setCart(newCart);
  };

  // Calculate the total price of the cart
  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      // Parse the price to integer (removing non-numeric characters)
      const price = parseInt(item.price.replace(/[^0-9.-]+/g, ""));
      return total + price;
    }, 0);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {/* List of items in the cart */}
          <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
            {cart.map((item, index) => (
              <li key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
                <span>{item.name} - {item.price}</span>
                <button onClick={() => removeFromCart(index)} style={{ color: 'red', border: 'none', backgroundColor: 'transparent' }}>
                  Remove
                </button>
              </li>
            ))}
          </ul>

          {/* Total Price */}
          <div>
            <h3>Total Price: {getTotalPrice()} </h3>
          </div>

          {/* Checkout Button */}
          <div>
            <button style={{ backgroundColor: '#28a745', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}

      {/* Link to go back to the Toyota page */}
      <div style={{ marginTop: '20px' }}>
        <Link to="/dashboard">
          <button style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }} className='ml-58'>
            Go back to Inventory
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
