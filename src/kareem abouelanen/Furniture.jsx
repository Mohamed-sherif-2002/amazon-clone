import { useState, useEffect } from 'react';
import './Furniture.css';

const Furniture = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Karim-Aboualenin/Amazon-clone/refs/heads/main/products.json')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const furniture = products.filter(product => product.category.name === 'Furniture');
  const topRated = furniture.slice(0, 5);
  const under50 = furniture.filter(product => product.price < 50);
  const topSellers = furniture.slice(3, 12);
  const recommended = furniture.slice(1, 18);

  return (
    <div className="furniture">
      <h1>Furniture</h1>

      {/* Top Rated Section */}
      <div className="section">
        <h2>Top Rated</h2>
        <div className="product-grid">
          {topRated.map(product => (
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

export default Furniture;
