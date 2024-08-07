import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import LoginSignup from './pages/LoginSignup';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Cart from './pages/Cart';
import ShopCategory from './pages/ShopCategory';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import men_banner from './components/assests/banner_mens.png';
import women_banner from './components/assests/banner_women.png';
import kids_banner from './components/assests/banner_kids.png';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
        <Route path="/womens" element={<ShopCategory banner= {women_banner} category="women" />} />
        <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid" />} />
        <Route path="/productId" element={<Product />} >
        <Route path=':productId' element={<Product />} />
        </Route> 
        <Route path="/Cart" element={<Cart/>} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      <Footer />
      </BrowserRouter>
  );
}

export default App;

