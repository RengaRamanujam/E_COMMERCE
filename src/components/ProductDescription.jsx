import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { addQuantity,selectQuantityById,subQuantity } from '../features/cart/cartSlice';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ProductDescription = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const productq=useSelector(state => selectQuantityById(state, id));
  const dispatch=useDispatch();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/shop/product/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, []);
  const addedToCart=()=>{
    toast.success("Added to cart",)
  }
  return (
    <>
      {product ? (
        <>
          <div className="border rounded-lg p-4 shadow-md mx-2 mt-5 grid grid-cols-2">
            <div>
                <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <p className="text-gray-800 font-semibold mb-2">Rs.{product.price}</p>
                <div className="flex items-center mb-2">
                  <p className="text-yellow-500 mr-1">Rating:</p>
                  <p>{product.rating}</p>
                </div>
                <p className={product.isAvailable ? "text-green-500" : "text-red-500"}>
                  {product.isAvailable ? "In stock" : "Out of stock"}
                </p>
            </div>   
            <div>
                <img className='max-w-60 max-h-64' src={product.imageUrl} alt="" />
            </div>      


        <div className='flex p-2 mx-1'>

              
              <p className=''
                onClick={() => {
                  dispatch(addQuantity({id:product.productId,name:product.name,price:product.price,description:product.description,rating:product.rating,imageUrl:product.imageUrl}))
                }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 mx-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </p>
              <h2 className='text-3xl'>{productq}</h2>
              <p className=''  onClick={() => {
                    dispatch(subQuantity ({ id :product.productId}));
                  }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 mx-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                </svg>
              </p>


              <button
              className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              onClick={
                addedToCart
              //   ()=>{
              //   dispatch(addQuantity({id:product.productId,name:product.name,price:product.price,description:product.description,rating:product.rating}))
              // }
              }>Add to cart</button>

        </div>

        </div>
        <ToastContainer autoClose={1200} />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default ProductDescription;
