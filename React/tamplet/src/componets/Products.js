import React from 'react';
import { Link } from 'react-router-dom';
import store from '../store';
function Products() {
  return (
    <>
      <h1>Products</h1>
      <ul>
        {store.map((item) => (
          <li key={item.id}>
            <Link to={`/products/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
export default Products;
