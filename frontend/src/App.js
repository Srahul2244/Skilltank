import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/" element={<Login />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
