import React, { useState, useEffect } from 'react';
import { Client } from '../../client';
import CloseIcon from '@mui/icons-material/Close';

function Productslist({ Products }) {
  const deleteProducts = (id) => {
    Client
      .delete(id)
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="client-list3">
      <h1>Products</h1>
      
      {Products.map((product) => (
        <div key={product._id} className="client-card3">
          <CloseIcon onClick={(e) => {
            e.stopPropagation();
            deleteProducts(product._id);
          }} />
          
          <h3>product: {product.productn}</h3>
          <p>Dr: {product.Dr}</p>
          <p>Cr: {product.cr}</p>
          <p>Balance: {product.balance}</p>
          <p>Date: {new Date(product.date).toLocaleDateString()}</p>
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
        const response = await Client.fetch('*[_type == "products"]');
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
