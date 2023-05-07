// import React from "react";
import { useGlobalContext } from "../context";
import { useParams } from "react-router-dom";
import { HiStar, HiHeart } from "react-icons/hi2";
import { useEffect } from "react";

const ProductDetails = () => {
  // const [wishListed, setWishListed] = useState(true);
  const { products, loading, fetchData, addToCart } = useGlobalContext();
  useEffect(() => {
    fetchData();
  }, []);

  function addCartItem(id) {
    addToCart(product);
  }

  const { productId } = useParams();
  if (loading) {
    return <div className="loading"></div>;
  }
  const product = products.find((product) => product.id == productId);
  const { id, image, title, description, price, wishlists } = product;
  return (
    <div className="container">
      <article className="singleProduct">
        <div className="img-container">
          <button style={{ border: "none" }}>
            {/* className={wishlists ? "like-container liked" : "like-container"} */}
            <div className="like-container">
              <HiHeart className="like-icon" />
            </div>
          </button>
          <img src={image} alt={title} />
          <div className="order">
            <button
              onClick={() => {
                addCartItem(productId);
              }}
            >
              ADD TO CART
            </button>
            <button>BUY NOW</button>
          </div>
        </div>
        <div className="product-details">
          <h5 className="brand">LIBERTY</h5>
          <p className="title">{title}</p>
          <small className="special-price">Special price</small>

          <span className="price">
            <p className="After-discount">₹{price}</p>
            <p className="before-discount">₹{price}</p>
            <p className="discount">{10}% off</p>
          </span>
          <div className="rating">
            <span className="stars">
              <p>4.3</p>
              <HiStar></HiStar>
            </span>
            <p className="reviews">{`${1342} ratings and ${200} reviews`}</p>
          </div>
          <p className="desc">{description}</p>
        </div>
      </article>
    </div>
  );
};

export default ProductDetails;
