import React from 'react'


const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Tablet", price: 0 }, // Out of stock
  ];

const Productlist = () => {
  return (
    <ul>
      {products.map((product) =>
        product.price > 0 ? (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ) : (
          <li key={product.id} style={{ color: "red" }}>
            {product.name} - Out of stock
          </li>
        )
      )}
    </ul>
  )
}

export default Productlist
