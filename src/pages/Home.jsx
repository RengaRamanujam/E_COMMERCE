import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCart from '../components/ProductCart';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`/api/shop/allProduct`);
        if (!response.ok) {
          throw new Error('Failed to  fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
    setLoading(false)
  }, []);
  
  if(loading) return <h1>Fetching data...</h1>
  else
  return (
    <>
      <div className="mx-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
        {products.map((product) => (
          <ProductCart key={product.name} data={product}/>        
        ))}
      </div>
    </>
  );
};

export default Home;