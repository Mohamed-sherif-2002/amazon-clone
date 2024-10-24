import { useState, useEffect } from 'react';
import './Electronics.css';

const Electronics = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Karim-Aboualenin/Amazon-clone/refs/heads/main/products.json')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const electronics = products.filter(product => product.category.name === 'Electronics');
  const topRated = electronics.slice(0, 6);  // Top 6 products (can adjust)
  const under50 = electronics.filter(product => product.price < 50);
  const topSellers = electronics.slice(6, 12);  // Another set of 6 products (can adjust)
  const recommended = electronics.slice(1, 13);  // Another set of 6 products

  return (
    <div className="electronics">
      <h1>Electronics</h1>

      {/* Top Rated Section */}
      <div className="section">
        <h2>Top Rated</h2>
        <div className="product-grid">
          {topRated.map(product => (
            <a href={`/${product.id}`}>
              <div key={product.id} className="product-card">
              <img src={product.images[0]} alt={product.title} />
              <h3>{product.title}</h3>
              <p className="price">${product.price}</p>
              <p>{product.description.slice(0, 50)}...</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Under $50 Section */}
      <div className="section">
        <h2>Under $50</h2>
        <div className="product-grid">
          {under50.map(product => (
            <a href={product.id}>
              <div key={product.id} className="product-card">
              <img src={product.images[0]} alt={product.title} />
              <h3>{product.title}</h3>
              <p className="price">${product.price}</p>
              <p>{product.description.slice(0, 50)}...</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Top Sellers Section */}
      <div className="section">
        <h2>Top Sellers</h2>
        <div className="product-grid">
          {topSellers.map(product => (
            <a href={product.id}>
              <div key={product.id} className="product-card">
              <img src={product.images[0]} alt={product.title} />
              <h3>{product.title}</h3>
              <p className="price">${product.price}</p>
              <p>{product.description.slice(0, 50)}...</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Recommended for You Section */}
      <div className="section">
        <h2>Recommended for You</h2>
        <div className="product-grid">
          {recommended.map(product => (
            <a href={product.id}>
              <div key={product.id} className="product-card">
              <img src={product.images[0]} alt={product.title} />
              <h3>{product.title}</h3>
              <p className="price">${product.price}</p>
              <p>{product.description.slice(0, 50)}...</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Electronics;
