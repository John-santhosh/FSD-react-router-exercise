import { NavLink } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi2";
import { useGlobalContext } from "../context";
const Navbar = () => {
  const { totalItems } = useGlobalContext();
  return (
    <nav>
      <NavLink to="/">Home </NavLink>
      <NavLink to="/about">About </NavLink>
      <NavLink to="/products">Products </NavLink>
      <NavLink className="" to="/cart">
        <div className="cart-icon cart">
          <HiShoppingCart className="icon" />
          Cart
          <div className="current-items">{totalItems}</div>
        </div>
      </NavLink>
    </nav>
  );
};

export default Navbar;
