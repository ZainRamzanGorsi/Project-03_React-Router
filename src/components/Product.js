import React from "react";
import { Link, Outlet } from "react-router-dom";

function Product() {
  

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Product Page!</h1>
      <Outlet />
      
    </div>
  );
}

export default Product;
