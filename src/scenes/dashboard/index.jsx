import React, { useState, useEffect } from 'react';
import { Client } from '../../client';

function ClientList({ clients }) {
  return (
    <div className="client-list">
      {clients.map((client) => (
        <div key={client._id} className="client-card">
          <h3>NAME : {client.name}</h3>
          <p>Item Code: {client.itemCode}</p>
          <p>Description: {client.itemDescription}</p>

          <p>Item piece: {client.piece}</p>
          <p>System On-hand Quantity: {client.systemOnHandQuantity}</p>

          <p>Physical Actual Counting Quantity: {client.physicalActualCountingQuantity}</p>
          <p>Shortage: {client.shortage}</p>

          <p>Overage: {client.overage}</p>
          <p>Item Status: {client.itemStatus}</p>
          {/* Render other fields as needed */}
        </div>
      ))}
    </div>
  );
}

export default function App() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Client.fetch('*[_type == "client"]');
        setClients(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <ClientList clients={clients} />
    </div>
  );
}