import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>MyShop</h2>
      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/cart" style={styles.link}>Cart</Link>
        <Link to="/checkout" style={styles.link}>Checkout</Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    padding: '10px 20px',
    background: '#333',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    margin: 0,
  },
  link: {
    marginLeft: '15px',
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
  }
};

export default Navbar;
