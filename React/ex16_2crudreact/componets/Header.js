import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/users">users</Link>
    </>
  );
}
export default Header;
