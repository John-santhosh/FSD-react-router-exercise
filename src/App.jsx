import { Route, BrowserRouter, Routes } from "react-router-dom";
import AppContext from "./context";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Error from "./pages/Error";
import ProductDetails from "./pages/ProductDetails";
// const url = "https://fakestoreapi.com/products";

const App = () => {
  return (
    <AppContext>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes className="container">
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/About" element={<About></About>}></Route>
          <Route path="/Products" element={<Products></Products>}></Route>
          <Route
            path="/Products/:productId"
            element={<ProductDetails></ProductDetails>}
          ></Route>
          <Route path="Login" element={<Login></Login>}></Route>
          <Route path="*" element={<Error></Error>}></Route>
        </Routes>
      </BrowserRouter>
    </AppContext>
  );
};
export default App;

// <div>john</div>
//  <BrowserRouter>
//       <Routes>
//         <Route></Route>
//       </Routes>
//     </BrowserRouter>
