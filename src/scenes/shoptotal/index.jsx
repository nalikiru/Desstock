import React, { useState, useEffect } from 'react';
import { Client } from '../../client';

function ShoptotalList({ shopTotals }) {
  return (
    <div className="client-list5">
      <h1>Shoptotal</h1>
      {shopTotals.map((shopTotal) => (
        <div key={shopTotal._id} className="client-card5">
          <h3>NAME : {shopTotal.name}</h3>
          <p>Item Code: {shopTotal.product}</p>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const [shopTotals, setShopTotals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Client.fetch('*[_type == "shoptotal"]');
        setShopTotals(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <ShoptotalList shopTotals={shopTotals} />
    </div>
  );
}