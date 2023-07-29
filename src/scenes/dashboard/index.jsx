import React from 'react';
import ClientList from"../Client"
import OtherClientslist from"../contacts"
import Productslist from"../Products"
import ResidentialTotalList from "../resdentialtotal"
import ShoptotalList from"../shoptotal"
import StockList from"../Stock"
import StockitemList from"../stockitem/calendar"
import TotalEnterpriseList from "../totalenterprize"
import { Link } from "react-router-dom";
import { Box } from '@mui/material';


export default function App() {
  return (
 <div className="dash">   
 <div className="auto">      
 <Box>
      <Link to="/"><p>Dashboard</p></Link>
   
      <h2>Content</h2>
       <Link to="/client"><p>Client</p></Link>
     <Link to="/Otherclient"><p>Other Clients</p></Link>
     <Link to="/Products"><p>Products</p></Link>
         <h2>Pages</h2>
         <Link to="/Stock"><p>Stock</p></Link>
     <Link to="/stockitem"><p>StockItem</p></Link>
     <Link to="/total"><p>Total Enterprise</p></Link>
     <Link to="/shop"><p>ShopTotal</p></Link>
     <Link to="/resdential"><p>Resdential Total</p></Link>
 
          </Box>
          </div>
     <div className="task">
    <div className="client-list">
    <div className='client-card'><Link to="/client"><ClientList /></Link></div>
    <div className='client-card'><Link to="/Otherclient"><OtherClientslist /></Link></div>
    <div className='client-card'><Link to="/Products"><Productslist /></Link></div>
   <div className='client-card'><Link to="/Stock"><StockList /></Link></div>
    <div className='client-card'><Link to="/stockitem"><StockitemList /></Link></div>
    <div className='client-card'> <Link to="/total"><TotalEnterpriseList /></Link></div>
    <div className='client-card'><Link to="/shop"><ShoptotalList /></Link></div>
    <div className='client-card'><Link to="/resdential"><ResidentialTotalList /></Link></div>
   </div> 
    </div>
  </div>
  );
}
