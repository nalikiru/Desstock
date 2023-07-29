import React, { useState, useEffect } from 'react';
import { Client } from '../../client';

function StockitemList({ stockitems }) {
  return (
    <div className="client-list7">
      <h1>Stockitem</h1>
      {stockitems.map((stockitem) => (
        <div key={stockitem._id} className="client-card7">
          <h3>NAME : {stockitem.name}</h3>
          <p>Item Code: {stockitem.itemCode}</p>
          <p>Description: {stockitem.itemDescription}</p>

          <p>Item piece: {stockitem.piece}</p>
          <p>System On-hand Quantity: {stockitem.systemOnHandQuantity}</p>

          <p>Physical Actual Counting Quantity: {stockitem.physicalActualCountingQuantity}</p>
          <p>Shortage: {stockitem.shortage}</p>

          <p>Overage: {stockitem.overage}</p>
          <p>Item Status: {stockitem.itemStatus}</p>
          <p>Stock: {stockitem.Stock.userName}</p>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const [stockitems, setStockitems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Client.fetch('*[_type == "stockitem"]');
        setStockitems(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <StockitemList stockitems={stockitems} />
    </div>
  );
}