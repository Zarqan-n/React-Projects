import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div className="text-center py-8">
      <h1 className="text-2xl font-bold mb-6">Products</h1>

      {/* options */}
      <div className="flex justify-center gap-6">
        <Link to="mens" className="px-6 py-2 bg-emerald-300 text-emerald-800 font-bold rounded">
          Mens
        </Link>

        <Link to="womens" className="px-6 py-2 bg-emerald-300 text-emerald-800 font-bold rounded">
          Womens
        </Link>
      </div>

      {/* selected page renders here */}
      <div className="mt-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Product;
