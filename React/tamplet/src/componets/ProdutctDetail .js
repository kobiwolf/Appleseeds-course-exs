import React from 'react';
import store from '../store';
import Card from './Card';
import { Link } from 'react-router-dom';
function ProductDetail(props) {
  if (store.find((item) => item.id === props.match.params.id)) {
    return <h1>page not found</h1>;
  } else {
    return (
      <>
        <Card product={store[props.match.params.id - 1]} />
        <button onClick={() => {}}>
          <Link
            style={{ textDecoration: 'none', color: 'black' }}
            to="/products"
          >
            back
          </Link>
        </button>
      </>
    );
  }
}
export default ProductDetail;
