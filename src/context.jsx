import axios from "axios";
import { createContext, useContext, useReducer, useState } from "react";

const GlobalContext = createContext();
import { brands } from "./brandsNames";
import { reducer } from "./reducer";
import { totalAmount } from "./calc-utils";

// custom-hook
export const useGlobalContext = () => useContext(GlobalContext);
const url = "https://fakestoreapi.com/products";

function AppContext({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [state, dispatch] = useReducer(reducer, []);
  const { totalAmt, totalItems } = totalAmount(state);

  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };
  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  const addToCart = (product) => {
    dispatch({ type: "ADD", payload: product });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const fetchData = async () => {
    try {
      const { data } = await axios(url);
      const result = data.map((item) => {
        return { ...item, wishlists: false, amt: 1 };
      });
      setProducts(result);
      // console.log(result);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        products,
        loading,
        fetchData,
        brands,
        increase,
        decrease,
        addToCart,
        removeItem,
        clearCart,
        totalItems,
        totalAmt,
        state,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default AppContext;
