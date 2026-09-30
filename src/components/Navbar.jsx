import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow mb-6">
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">
          Product Store
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-gray-600 hover:text-blue-600">
            Home
          </Link>
          <Link
            to="/add-product"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add Product
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
