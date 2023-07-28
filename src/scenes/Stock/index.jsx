import React, { useState, useEffect } from 'react';
import { Client } from '../../client';

function StockList({stocks}) {
  return (
    <div className="client-list">
      {stocks.map((stock) => (
        <div key={stock._id} className="client-card">
          <h3>NAME : {stock.Stock.userName}</h3>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Client.fetch('*[_type == "stock"]');
        setStocks(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <StockList stocks={stocks} />
    </div>
  );
}