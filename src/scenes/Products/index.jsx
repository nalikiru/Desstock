import React, { useState, useEffect } from 'react';
import { Client } from '../../client';
function Productslist({ Products }) {
  return (
    <div className="client-list3">
      <h1>Products</h1>
      {Products.map((Products) => (
        <div key={Products._id} className="client-card3">
          <h3>productName : {Products.productn}</h3>
          <p>Dr: {Products.Dr}</p>
          <p>Cr: {Products.Cr}</p>

          <p>Balance: {Products.Balance}</p>
          <p>Date: {Products.date}</p>
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
