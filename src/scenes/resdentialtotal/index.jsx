import React, { useState, useEffect } from 'react';
import { Client } from '../../client';

function ResidentialTotalList({ residentialTotals }) {
  return (
    <div className="client-list4">
      <h1>Resdentialtotal</h1>
      {residentialTotals.map((residentialTotal) => (
        <div key={residentialTotal._id} className="client-card4">
          <p>Item Code: {residentialTotal.itemCode}</p>
          <p>Description: {residentialTotal.itemDescription}</p>

          <p>Item piece: {residentialTotal.piece}</p>
          <p>System On-hand Quantity: {residentialTotal.systemOnHandQuantity}</p>

          <p>Physical Actual Counting Quantity: {residentialTotal.physicalActualCountingQuantity}</p>
          <p>Shortage: {residentialTotal.shortage}</p>

          <p>Overage: {residentialTotal.overage}</p>
          <p>Item Status: {residentialTotal.itemStatus}</p>
          {/* Render other fields as needed */}
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const [residentialTotals, setResidentialTotals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Client.fetch('*[_type == "residentialTotal"]');
        setResidentialTotals(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <ResidentialTotalList residentialTotals={residentialTotals} />
    </div>
  );
}
