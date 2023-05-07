import home from "../images/home.svg";
const Home = () => {
  return (
    <>
      <div className="greetings">
        <h2>Welcome</h2>
        <p>Navigate to products and add something to cart</p>
      </div>
      <section className="center">
        <img src={home} alt="" />
      </section>
    </>
  );
};

export default Home;
