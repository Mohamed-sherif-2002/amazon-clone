import { useState, useEffect } from 'react';
import './Clothes.css';

const Clothes = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Karim-Aboualenin/Amazon-clone/refs/heads/main/products.json')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const clothes = products.filter(product => product.category.name === 'Clothes');
  const topRated = clothes.slice(0, 50);
  const under50 = clothes.filter(product => product.price < 50);
  const topSellers = clothes.slice(6, 12);
  const recommended = clothes.slice(5,19);

  return (
    <div className="clothes">
      <h1>Clothes</h1>

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

export default Clothes;
