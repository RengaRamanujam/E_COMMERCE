import React from 'react'
import RazorpayForm from './RazorpayForm'
import { useSelector } from 'react-redux';

const Payment = () => {
  const amount = useSelector(state => state.cart.totalAmount);
  console.log(amount)
  return (
    <>
      <div>
        {/* <h1 className='text-center'>Amount to be paid :{amount}</h1> */}
        <RazorpayForm amount={amount}/>
      </div>
    </>
  )
}

export default Payment