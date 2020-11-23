import React from "react";
import { Link } from "react-router-dom";

export default function ProductIndex() {
  const shose = {
    "vision-racer": {
      name: "Vision Racer",
      img:
        "https://cdn.shopify.com/s/files/1/0852/3376/products/b69e86b8ef541f60e43c0a36bcbae6da_367f8df9-0140-41ce-8430-d16075bf8914_360x.jpg?v=1600593260",
    },
    "air-max-92": {
      name: "Air Max 92",
      img:
        "https://cdn.shopify.com/s/files/1/0852/3376/products/144566e544fb9da5a3458234910727b5_48f0ae16-4443-43e5-bbd0-3f4a9032e2ae_360x.jpg?v=1600591754",
    },
    "kyrie-5": {
      name: "Kyrie 5",
      img:
        "https://cdn.shopify.com/s/files/1/0852/3376/products/25eea644ccae0123dcdc65dc1534a4c1_0142415c-ef4e-4b6e-ba4b-80a438e0fc43_360x.jpg?v=1600591664",
    },
    "stylish-pink": {
      name: "Kids Stylish Pink ",
      img:
        "https://cdn.shopify.com/s/files/1/0852/3376/products/bce49d8628e6121ecb8f0f9c8a504dcc_99e78db1-1859-4c8d-94e9-688b1e2f10a7_360x.jpg?v=1600589211",
    },
  };

  return (
    <div>
      <ul>
        {Object.entries(shose).map(([productId, { name, img }]) => (
          <Link to={productId}>
            <li
              key={productId}
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "50px",
              }}
            >
              <h2>{name}</h2>
              <img src={img} alt={name} />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
