import { NavLink } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi2";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home </NavLink>
      <NavLink to="/about">About </NavLink>
      <NavLink to="/products">Products </NavLink>
      <NavLink to="/login">login </NavLink>
      <HiShoppingCart className="cart-icon"></HiShoppingCart>
    </nav>
  );
};

export default Navbar;
