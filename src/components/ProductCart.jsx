import React from 'react'
import { Link } from 'react-router-dom';

const ProductCart = ({data}) => {
  const {productId,name,category,imageUrl,rating,price,description}=data;
  return (
    <>
      <div className="mt-5 cursor-pointer w-80 h-60 rounded-lg relative border">
      <Link to={`/product/${productId}`} >
        <figure
          className="relative mb-2 w-full h-4/5"
        >
          <img
            src={imageUrl}
            alt={`image ${name}`}
            className="w-full h-full object-contain rounded-lg"
          />
        </figure>
        </Link>
      <p className="flex justify-between px-1">
        <span className="text-black no-underline font-bold">
          {name.length > 25 ? name.substring(0, 24) + "..." : name}
        </span>
        <span className="text-lg font-medium no-underline">Rs.{price}</span>
        <p className="text-lg font-medium no-underline ">
        {rating} ⭐ 
        </p>
      </p>
      
    </div>
    </>
  )
}

export default ProductCart