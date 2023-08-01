import React, { useState, useEffect } from 'react';
import { Client } from '../../client';

function TotalEnterpriseList({ totalEnterprises }) {
  return (
    <div className="client-list8">
      <h1>TotalEnterprise</h1>
      {totalEnterprises.map((totalEnterprise) => (
        <div key={totalEnterprise._id} className="client-card8">
          <p>Item Code: {totalEnterprise.itemCode}</p>
          <p>Description: {totalEnterprise.itemDescription}</p>

          <p>Item piece: {totalEnterprise.piece}</p>
          <p>System On-hand Quantity: {totalEnterprise.systemOnHandQuantity}</p>

          <p>Physical Actual Counting Quantity: {totalEnterprise.physicalActualCountingQuantity}</p>
          <p>Shortage: {totalEnterprise.shortage}</p>

          <p>Overage: {totalEnterprise.overage}</p>
          <p>Item Status: {totalEnterprise.itemStatus}</p>
          {/* Render other fields as needed */}
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const [totalEnterprises, setTotalEnterprises] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Client.fetch('*[_type == "totalEnterprise"]');
        setTotalEnterprises(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <TotalEnterpriseList totalEnterprises={totalEnterprises} />
    </div>
  );
}
