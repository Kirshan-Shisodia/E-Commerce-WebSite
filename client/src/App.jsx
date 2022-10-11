import React from "react";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Product from "./Pages/Product";
import Home from "./Pages/Home";
import ProductList from "./Pages/ProductList";
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Success from "./Pages/Success";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={< Home />} ></Route>
      <Route exact path="/products/:category" element={< ProductList />} ></Route>
      <Route exact path="/product/:id" element={< Product />} ></Route>
      <Route exact path="/cart" element={< Cart />} ></Route>
      <Route exact path="/success" element={< Success />} ></Route>
      <Route exact path="/login" element={user ? <Navigate to="/" />: <Login />} ></Route>
      <Route exact path="/register" element={user ? <Navigate to="/" />: <Register />} ></Route>
      </Routes>
    </Router>
  );
};

export default App;