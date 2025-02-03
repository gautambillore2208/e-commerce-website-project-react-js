import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import { Routes, Route } from 'react-router-dom';
import Home from "./Home";
import TopRated from "./components/Pages/TopRated";
import ProductDetail from "./components/Pages/ProductDetail";
import MyCart from "./components/Pages/MyCart";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
  

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
    <Navbar handleOrderPopup={handleOrderPopup} /> 
      
      <Routes>         
        <Route path="/" element={ <Home  />} />
        <Route path="/top-rated" element={ <TopRated />} />
        <Route path="/cart" element={ <MyCart />} />
        <Route path="/product-detail/:id" element={ <ProductDetail />} />
       
      </Routes>

     
     
      
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default App;
