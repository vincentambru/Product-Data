import React, { Component, useState,useEffect } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import CardProduct from './Components/cardProduct';
import ProductDetail from './Components/productDetail';
import CartProduct from './Components/cartProduct'
import HandleContext from './Context'
import axios from 'axios';

import './App.css';

export default function App() {

  const [cartData, setCartData] = useState([]);
  const [value, setValue] = useState([]);

  useEffect(() =>{
    axios.get("https://fakestoreapi.com/products").then((d) =>(
        setValue(d.data)
    ))

},[])

  return (
    <HandleContext.Provider value={{
      cartData, setCartData, value, setValue
    }}>
    <Router>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          <Route path="/" element={<CardProduct />} />
          <Route path="productDetail/:id" element={<ProductDetail />} />
          <Route path="/cartProduct" element={<CartProduct />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}
      </Routes>
    </Router>
    </HandleContext.Provider>
  );
}

