import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../context/CartContext';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get(`/api/products?search=${search}&category=${category}`);
      setProducts(res.data);
    };
    fetchProducts();
  }, [search, category]);

  return (
    <div className="container">
      <h2>Products</h2>
      <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search..." />
      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option value="">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Fitness">Fitness</option>
        <option value="Footwear">Footwear</option>
        <option value="Wearables">Wearables</option>
        <option value="Accessories">Accessories</option>
      </select>
      <div className="product-grid">
        {products.map((p) => (
          <div key={p._id} className="product-card">
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <strong>${p.price}</strong><br />
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
