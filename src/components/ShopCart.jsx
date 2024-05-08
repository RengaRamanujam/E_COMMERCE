import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addQuantity, subQuantity, removeItem, clearCart, changeAmount } from '../features/cart/cartSlice.js';
import { Link } from 'react-router-dom';

const ShopCart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const Amount = useSelector(state => state.cart.totalAmount);
  const dispatch = useDispatch();
  let amount = 0;

  if (cartItems.length === 0) return <div><h1>Cart is empty</h1></div>;

  for (let i = 0; i < cartItems.length; i++) {
    amount += (cartItems[i].price * cartItems[i].quantity);
  }
  dispatch(changeAmount({ amount: amount }))
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold my-4">Shopping Cart</h2>
      {cartItems.map(item => (
        <div key={item.name} className="border-b border-gray-200 py-4">
          <div className="flex items-center">
            <div className='flex'>
              <div className=''>
                <p className="text-lg font-semibold">{item.name}</p>
                <p className="text-gray-600">Price: {item.price}</p>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
              </div>
              <div>
                <img src={item.imageUrl} alt={item.name} className="mx-40 h-40 w-40 object-cover mr-4" />
              </div>
            </div>

            <div className="flex space-x-2">
              <button onClick={() => dispatch(addQuantity({ id: item.productId, name: item.name, price: item.price, description: item.description, rating: item.rating, imageUrl: item.imageUrl }))} className="bg-blue-500 text-black px-2 py-1 rounded">+</button>
              <button onClick={() => dispatch(subQuantity({ id: item.id }))} className="bg-blue-500 text-black px-2 py-1 rounded">-</button>
              <button onClick={() => dispatch(removeItem(item.id))} className="bg-red-500 text-black px-2 py-1 rounded">Remove</button>
            </div>
          </div>
        </div>
      ))}
      <div className="mt-4 font-bold text-xl">Total: Rs.{Amount}</div>
      <div className="mt-4">
        <Link to={'/payment'}><button className="bg-green-500 text-black px-4 py-2 rounded mr-4">Pay now</button></Link>
        <button onClick={() => dispatch(clearCart())} className="bg-red-500 text-black px-4 py-2 rounded">Clear Cart</button>
      </div>
    </div>
  );
};

export default ShopCart;
