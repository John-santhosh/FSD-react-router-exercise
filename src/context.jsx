import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();
import { brands } from "./brandsNames";

// c-hook
export const useGlobalContext = () => useContext(GlobalContext);
const url = "https://fakestoreapi.com/products";

function AppContext({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const { data } = await axios(url);
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <GlobalContext.Provider value={{ products, loading, fetchData, brands }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default AppContext;
