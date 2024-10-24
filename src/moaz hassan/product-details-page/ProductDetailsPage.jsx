import { Link, useParams } from "react-router-dom";
import "./product-details.css";
import { useEffect, useState } from "react";
import Rating from "./RatingStars";
import RatingsComments from "./Ratings-Comments";
function ProductDetailsPage() {
  const [productDetails, setProductDetails] = useState({});
  const url_id = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Karim-Aboualenin/Amazon-clone/main/products.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const product = data.filter((product) => {
          return product.id === parseInt(url_id.id);
        });
        setProductDetails(product);
        setLoading(false);
      });
  }, [setProductDetails, url_id.id]);

  if (loading) {
    return <div className="loader"></div>;
  }

  if (localStorage.getItem("cart") === null) {
    localStorage.setItem("cart", "");
  }
  
  function add_to_cart(e) {
    e.onclick = () => {
      if (localStorage.getItem("cart") === "") {
        localStorage.setItem("cart", JSON.stringify(productDetails));
        alert("Product added to cart!");
      } else {
        const cart = JSON.parse(localStorage.getItem("cart"));
        cart.push(productDetails);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Product added to cart!");
      }
    };
  }

  const first_img = productDetails[0]?.images[0]
    ? productDetails[0]?.images[0]
    : "";

  const product_imgs = productDetails[0]?.images?.map((image, index) => {
    return (
      <img
        key={image}
        src={image}
        alt="product img"
        style={index === 0 ? { outline: "3px solid black" } : null}
        onClick={(e) => {
          e.target.parentElement.parentElement.querySelector(".main-img").src =
            e.target.src;
          e.target.parentElement.querySelectorAll("img").forEach((img) => {
            img.style.outline = "none";
          });
          e.target.style.outline = "3px solid black";
        }}
      />
    );
  });

  return (
    <>
      <h2 className="product-ref">{`${productDetails[0]?.category?.name} > ${productDetails[0]?.title}`}</h2>
      <div className="product-container">
        <div className="product-details-1">
          <img className="main-img" src={first_img} alt="product img" />
          <div className="product-imgs">{product_imgs}</div>
        </div>
        <div className="product-details-2">
          <h2>{productDetails[0]?.title}</h2>
          <p>{productDetails[0]?.description}</p>
          <div className="rating">
            Rating: <Rating rating={Math.random() * 5} />
          </div>
          <p className="price">Price: {productDetails[0]?.price}$</p>
          <p className="avail-amount">
            Available-Amount: {Math.ceil(Math.random() * 100)}
          </p>
          <p className="seller">Seller: Online Store</p>
          <p className="seller-rating">
            Seller-Rating: {Math.ceil(Math.random() * 100)}%
          </p>
          <div className="button-group">
            <button
              className="add-to-cart-btn"
              onClick={(e) => {
                add_to_cart(e.target);
              }}
            >
              Add to Cart
            </button>
            <Link
              to="/cart"
              className="buy-now-btn"
              onClick={(e) => {
                add_to_cart(e.target);
              }}
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>
      <div className="rating-comments">
        <RatingsComments />
      </div>
    </>
  );
}

export default ProductDetailsPage;
