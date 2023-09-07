
import React, { useEffect, useState } from 'react';
import Product from './Product';
import axios from 'axios';

const ProductList = () => {

const url = "http://localhost:8080/api/products/findAll";
    
const [products, setProducts] = useState([]);
useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
            headers: {
              'Access-Control-Allow-Origin': 'http://localhost:3000',           
            }
          }); 
        setProducts(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;