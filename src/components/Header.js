import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div style={{backgroundColor: "blue", color: 'white'}}>
      <Link to="home" style={{color: 'white', fontSize:'20px',paddingLeft: '19px'}}>Home</Link>
      
      <Link to="product" style={{color: 'white', fontSize:'20px',paddingLeft: '10px'}}>Product</Link>
    </div>
  );
}
