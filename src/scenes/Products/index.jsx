import React, { useState, useEffect } from 'react';
import { Client } from '../../client';
function Productslist({ Products }) {
  return (
    <div className="client-list">
      {Products.map((Products) => (
        <div key={Products._id} className="client-card">
          <h3>NAME : {Products.ProductName}</h3>
          <p>Item Code: {Products.Dr}</p>
          <p>Description: {Products.Cr}</p>

          <p>Item piece: {Products.Balance}</p>
          <p>System On-hand Quantity: {Products.date}</p>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Client.fetch('*[_type == "Products"]');
        setProducts(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Productslist Products={products} />
    </div>
  );
}