import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";
import { useEffect } from "react";
const Products = () => {
  const navigate = useNavigate();
  const { products, loading, fetchData, brands } = useGlobalContext();
  useEffect(() => {
    fetchData();
  }, []);
  // console.log(products);
  if (loading) {
    return <h1 className="loading"></h1>;
  }
  return (
    <div className="container">
      {products.map((product, ind) => {
        const { id, category, image, price, title } = product;
        return (
          <article key={id} className="product">
            <div>
              <img className="img" src={image} alt={category} />
            </div>
            <div className="product-details">
              <h5 className="brand">{brands[ind]}</h5>
              <p className="title">{title}</p>
              <span className="price">
                <p className="After-discount">₹{price}</p>
                <p className="before-discount">₹{price}</p>
                <p className="discount">{6}% off</p>
              </span>
              <button
                onClick={() => {
                  navigate(`/products/${id}`);
                }}
              >
                Know More
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Products;
