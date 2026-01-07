import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-emerald-800 flex py-4 px-8 justify-between">
      <h1 className="text-2xl text-emerald-200 font-bold">Zarqan</h1>
      <div className="flex gap-10">
        <Link className="text-xl hover:underline" to="/">Home</Link>
        <Link className="text-xl hover:underline" to="/about">About</Link>
        <Link className="text-xl hover:underline" to="/courses">Courses</Link>
        <Link className="text-xl hover:underline" to="/products">Products</Link>
      </div>
    </div>
  );
};

export default Navbar;
