import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Mens from "./Pages/Mens";
import Error from "./Pages/Error";
import Womens from "./Pages/Womens";
import Courses from "./Pages/Courses";
import CourseDetail from "./Pages/CourseDetail";

const App = () => {
  return (
    <div className="bg-emerald-600 h-screen text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/products" element={<Product />}>
          <Route path="mens" element={<Mens />} />
          <Route path="womens" element={<Womens />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
