import React, { useState, useEffect } from 'react';
import { Client } from '../../client';
function OtherClientslist({ otherClients }) {
  return (
    <div className="client-list2">
      <h1>OtherClient</h1>
     {otherClients.map((otherClient) => (
        <div key={otherClient._id} className="client-card2">
          <h3>NAME : {otherClient.name}</h3>
          <p>Product: {otherClient.product}</p>
      </div>
      ))}
    </div>
  );
}

export default function App() {
  const [otherClients, setOtherClients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Client.fetch('*[_type == "Otherclient"]');
        setOtherClients(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <OtherClientslist otherClients={otherClients} />
    </div>
  );
}