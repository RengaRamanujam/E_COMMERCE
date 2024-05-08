import React, { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const RazorpayForm = (props) => {
  const navigate=useNavigate();
  const {amount}=props;
  console.log(amount)
  const [orderId, setOrderId] = useState('');
  function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
}


const createOrder = async () => {
  try {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );
        
        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }
      const response = await axios.post(`/api/payment/createorder`, { amount, currency: 'INR' });
      console.log(response)
      const { orderId } = response.data;
      console.log(orderId)
      setOrderId(orderId);

      const options = {
        key: process.env.RAZORPAY_KEY,
        amount: amount * 100,
        currency: 'INR',
        name: 'ElectroMart',
        description: 'Payment for Your Product',
        order_id: orderId,
        handler: function (response) {
          alert(response.razorpay_payment_id);
          navigate("/sucess");
        },
        prefill: {
          name: 'New user',
          email: 'your_email@example.com',
          contact: '9999999999',
        },
        notes: {
          address: 'Your Address',
        },
        theme: {
          color: '#F37254',
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (err) {
      console.error(err);
      navigate("/failure")
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-cyan-400 to-light-blue-500">
      <div className="max-w-xl mx-auto p-8 border border-gray-300 rounded-3 shadow-lg bg-white">
        <h2 className="text-2xl font-semibold mb-4">Payment Details</h2>
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-gray-700">Amount:</span>
            <span className="text-gray-900 font-bold">Rs. {amount}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-700">Tax:</span>
            <span className="text-gray-900 font-bold">18% (included)</span>
          </div>
        </div>
        <button className="w-full bg-blue-500 text-white py-3 rounded-md shadow-md hover:bg-blue-600 transition duration-300" onClick={createOrder}>
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default RazorpayForm;

